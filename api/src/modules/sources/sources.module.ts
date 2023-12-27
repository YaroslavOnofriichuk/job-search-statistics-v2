import { Module } from '@nestjs/common';
import { SourcesService } from './sources.service';
import { SourcesResolver } from './sources.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteSource } from '../../entities/note/note-source.entity';

@Module({
  providers: [SourcesResolver, SourcesService],
  imports: [TypeOrmModule.forFeature([NoteSource])],
})
export class SourcesModule {}
