import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { GetNotesArgs } from './dto/get-notes.args';
import { Note } from '../../../entities/note/note.entity';
import { NoteSource } from '../../../entities/note/note-source.entity';
import { NoteTag } from '../../../entities/note/note-tag.entity';
import { Tag } from '../../../entities/tag/tag.entity';

const hardCodeUserId = 1

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

  async create(dto: CreateNoteInput) {
    const source = await this.saveSource(hardCodeUserId, dto.source);

    const note = await this.notesRepository.save({
      position: dto.position,
      company: dto.company,
      link: dto.link,
      description: dto.description,
      status: dto.status,
      userId: hardCodeUserId,
      sourceId: source.id,
    });

    if (dto.tags?.length > 0) {
      this.saveTags(hardCodeUserId, dto.tags, note.id);
    }

    return note
  }

  async findAll(args: GetNotesArgs) {
    const qb = this.notesRepository.createQueryBuilder("note")
      .leftJoinAndSelect("note.source", "source")
      .where("note.userId = :userId", { userId: hardCodeUserId })

    if (args.search) {
      qb.andWhere(`LOWER(note.position) ~* LOWER(:value)`, { value: args.search })
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

  async findOne(id: number) {
    return await this.notesRepository.findOne({
      where: { id, userId: hardCodeUserId },
    });
  }

  async update(id: number, dto: UpdateNoteInput) {
    const note = await this.notesRepository.findOne({
      where: { id, userId: hardCodeUserId },
    });
    if (!note) {
      throw new BadRequestException("Note with provided id does not exist");
    };

    let source: NoteSource;
    if (dto.source) {
      source = await this.saveSource(hardCodeUserId, dto.source);
    }

    const updatedNote = await this.notesRepository.save({
      id,
      position: dto.position ? dto.position : note.position,
      company: dto.company ? dto.company : note.company,
      link: dto.link ? dto.link : note.link,
      description: dto.description ? dto.description : note.description,
      status: dto.status ? dto.status : note.status,
      sourceId: source ? source.id : note.sourceId,
      userId: hardCodeUserId,
    });

    if (dto.tags?.length > 0) {
      this.saveTags(hardCodeUserId, dto.tags, id);
    }

    return updatedNote;
  }

  async remove(id: number) {
    return await this.notesRepository.delete({ id, userId: hardCodeUserId });
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
}
