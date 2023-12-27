import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { GetNotesArgs } from './dto/get-notes.args';
import { Note, NoteStatus } from '../../entities/note/note.entity';
import { NoteSource } from '../../entities/note/note-source.entity';
import { NoteTag } from '../../entities/note/note-tag.entity';
import { Tag } from '../../entities/tag/tag.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
    @InjectRepository(NoteSource)
    private readonly sourcesRepository: Repository<NoteSource>,
    @InjectRepository(NoteTag)
    private readonly noteTagsRepository: Repository<NoteTag>,
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  async create(dto: CreateNoteInput, userId: number) {
    const source = await this.saveSource(userId, dto.source);

    const note = await this.notesRepository.save({
      position: dto.position,
      company: dto.company,
      link: dto.link,
      description: dto.description,
      status: dto.status,
      userId,
      sourceId: source.id,
    });

    if (dto.tags?.length > 0) {
      this.saveTags(userId, dto.tags, note.id);
    }

    return note
  }

  async findAll(args: GetNotesArgs, userId: number) {
    const qb = this.notesRepository.createQueryBuilder("note")
      .leftJoinAndSelect("note.source", "source")
      .where("note.userId = :userId", { userId })

    if (args.search?.trim()) {
      qb.andWhere(
        new Brackets((qb) => {
            qb.where(`LOWER(note.position) ~* LOWER(:value)`, {
              value: args.search.trim(),
            })
            .orWhere(`LOWER(note.company) ~* LOWER(:value)`, { value: args.search.trim() })
            .orWhere(`LOWER(note.description) ~* LOWER(:value)`, { value: args.search.trim() })
        }),
      )
    }

    if (args.status) {
      qb.andWhere("note.status = :value", { value: args.status })
    }

    const limit = args.limit || null;
    let currentPage = args.page || null;
    const totalItems = await qb.getCount();
    const totalPages = limit ? Math.ceil(totalItems / limit) : null;
    if (currentPage && totalPages && currentPage > totalPages) {
      currentPage = 1
    };
    const paginationSkip = currentPage && limit ? (currentPage - 1) * limit : null;

    if (paginationSkip !== null && limit !== null) {
      qb.skip(paginationSkip);
      qb.take(limit);
    }

    qb.orderBy({ "note.createdAt": args.sort || "DESC" })
    
    const notes = await qb.getMany();

    return {
      notes,
      currentPage,
      limit,
      totalItems,
      totalPages,
      nextPage: totalPages - currentPage > 0 ? currentPage + 1 : null,
      prevPage: currentPage > 1 && totalPages > 1 ? currentPage - 1 : null,
    }
  }

  async findOne(id: number, userId: number) {
    const note = await this.notesRepository.findOne({
      where: { id },
      relations: { source: true, tags: { tag: true }},
    });
    if (!note) {
      throw new NotFoundException("Note with provided id does not exist");
    };
    if (note.userId !== userId) {
      throw new ForbiddenException('You have no access to this resource');
    };
    return note;
  }

  async update(id: number, dto: UpdateNoteInput, userId: number) {
    const note = await this.notesRepository.findOne({
      where: { id },
    });
    if (!note) {
      throw new NotFoundException("Note with provided id does not exist");
    };
    if (note.userId !== userId) {
      throw new ForbiddenException('You have no access to this resource');
    };

    let source: NoteSource;
    if (dto.source) {
      source = await this.saveSource(userId, dto.source);
    }

    const updatedNote = await this.notesRepository.save({
      id,
      position: dto.position ? dto.position : note.position,
      company: dto.company ? dto.company : note.company,
      link: dto.link ? dto.link : note.link,
      description: dto.description ? dto.description : note.description,
      status: dto.status ? dto.status : note.status,
      sourceId: source ? source.id : note.sourceId,
      userId,
    });

    if (dto.tags?.length > 0) {
      this.saveTags(userId, dto.tags, id);
    }

    return updatedNote;
  }

  async remove(id: number, userId: number) {
    const note = await this.notesRepository.findOne({
      where: { id },
    });
    if (!note) {
      throw new NotFoundException("Note with provided id does not exist");
    };
    if (note.userId !== userId) {
      throw new ForbiddenException('You have no access to this resource');
    };
    await this.notesRepository.delete({ id, userId });
    return note;
  }

  async saveSource(userId: number, name: string): Promise<NoteSource> {
    let source = await this.sourcesRepository.findOne({
      where: { userId, name: name.trim() }
    })
    if (!source) {
      source = await this.sourcesRepository.save({
        userId,
        name: name.trim(),
      })
    }
    return source
  }

  async saveTags(userId: number, newTags: string[], noteId: number): Promise<void> {
    for (const newTag of newTags) {
      let tag = await this.tagsRepository.findOne({
        where: { userId, tag: newTag.trim() },
      })
      if (!tag) {
        tag = await this.tagsRepository.save({
          userId, 
          tag: newTag.trim(),
        })
      }

      const noteTag = await this.noteTagsRepository.findOne({
        where: { userId, noteId, tagId: tag.id }
      })
      if (!noteTag) {
        await this.noteTagsRepository.save({
          userId, 
          noteId, 
          tagId: tag.id,
        })
      }
    }
  }

  async getStatistic(userId: number, tags: string[]) {
    const qb = this.notesRepository
      .createQueryBuilder('note')

    if (tags.length > 0) {
      qb.leftJoinAndSelect('note.tags', 'noteTag')
        .leftJoinAndSelect('noteTag.tag', 'tag') 
        .select(`COUNT(*) FILTER (WHERE tag.tag IN (${tags.map(tag => `'${tag}'`).join(", ")}))`, 'ALL')
    } else {
      qb.select('COUNT(*)', 'ALL')
    }

    Object.values(NoteStatus).forEach(status => {
      const statusFilter = tags.length > 0
      ? `tag.tag IN (${tags.map(tag => `'${tag}'`).join(", ")}) AND note.status = '${status}'`
      : `note.status = '${status}'`;
      qb.addSelect(`COUNT(*) FILTER (WHERE ${statusFilter})`, status);
    });

    return await qb.where('note.userId = :userId', { userId }).getRawOne();
  }
}
