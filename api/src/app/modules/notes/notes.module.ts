import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { User } from '../../../entities/user/user.entity';

@Module({
  providers: [NotesResolver, NotesService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class NotesModule {}
