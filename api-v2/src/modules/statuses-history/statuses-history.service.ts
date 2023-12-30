import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteStatusHistory } from '../../entities/note/note-status-history.entity';

@Injectable()
export class StatusesHistoryService {
  constructor(
    @InjectRepository(NoteStatusHistory)
    private readonly historyRepository: Repository<NoteStatusHistory>,
  ) {}

  async findAll(noteId: number, userId: number) {
    return await this.historyRepository.find({
      where: { userId, noteId },
      order: { createdAt: "ASC" },
    });
  }
}
