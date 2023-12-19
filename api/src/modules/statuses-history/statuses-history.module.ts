import { Module } from '@nestjs/common';
import { StatusesHistoryService } from './statuses-history.service';
import { StatusesHistoryResolver } from './statuses-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteStatusHistory } from '../../entities/note/note-status-history.entity';

@Module({
  providers: [StatusesHistoryResolver, StatusesHistoryService],
  imports: [TypeOrmModule.forFeature([NoteStatusHistory])],
})
export class StatusesHistoryModule {}
