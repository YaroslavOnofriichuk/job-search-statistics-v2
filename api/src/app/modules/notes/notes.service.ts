import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { Note } from '../../../entities/note/note.entity';
import { NoteSource } from '../../../entities/note/note-source.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
    @InjectRepository(NoteSource)
    private readonly sourcesRepository: Repository<NoteSource>,
  ) {}

  async create(dto: CreateNoteInput) {
    let source = await this.sourcesRepository.findOne({
      where: { userId: 1, name: dto.source.trim() }
    })
    if (!source) {
      source = await this.sourcesRepository.save({
        userId: 1,
        name: dto.source.trim(),
      })
    }
    return await this.notesRepository.save({
      position: dto.position,
      company: dto.company,
      link: dto.link,
      description: dto.description,
      status: dto.status,
      userId: 1,
      sourceId: source.id,
    });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return await this.notesRepository.find({
      where: { userId: 1 },
      skip,
      take: limit,
    });
  }

  async findOne(id: number) {
    return await this.notesRepository.findOne({
      where: { id, userId: 1 },
    });
  }

  update(id: number, updateNoteInput: UpdateNoteInput) {
    return `This action updates a #${id} note`;
  }

  async remove(id: number) {
    return await this.notesRepository.delete({ id, userId: 1 });
  }
}
