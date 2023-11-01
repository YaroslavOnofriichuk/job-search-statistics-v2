import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { Note } from '../../../entities/note/note.entity';

@Module({
  providers: [NotesResolver, NotesService],
  imports: [TypeOrmModule.forFeature([Note])],
})
export class NotesModule {}
