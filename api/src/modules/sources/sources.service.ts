import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteSource } from 'src/entities/note/note-source.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SourcesService {
  constructor(
    @InjectRepository(NoteSource)
    private readonly sourcesRepository: Repository<NoteSource>,
  ) {}

  async findAll(userId: number) {
    return await this.sourcesRepository.find({
      where: { userId },
    });
  }
}
