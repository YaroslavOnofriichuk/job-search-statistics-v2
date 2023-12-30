import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteSource } from '../../entities/note/note-source.entity';
import { Repository } from 'typeorm';
import { NoteStatus } from '../../entities/note/note.entity';

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

  async getStatistic(userId: number) {
    const qb = this.sourcesRepository.createQueryBuilder('source')
      .select(['source.id', 'source.name'])
      .addSelect('source.id', 'id')
      .addSelect('source.name', 'name')

    Object.values(NoteStatus).forEach(status => {
      qb.addSelect(`COUNT(n.id) FILTER (WHERE n.status = '${status}')`, status)
    })

    const result = await qb
      .leftJoin('source.notes', 'n', 'n.userId = :userId')
      .where('source.userId = :userId', { userId })
      .groupBy('source.id')
      .getRawMany();

    return result
  }
}
