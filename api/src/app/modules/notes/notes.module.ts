import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { Note } from '../../../entities/note/note.entity';
import { NoteSource } from '../../../entities/note/note-source.entity';

@Module({
  providers: [NotesResolver, NotesService],
  imports: [TypeOrmModule.forFeature([Note, NoteSource])],
})
export class NotesModule {}
