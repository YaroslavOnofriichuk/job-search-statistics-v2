import { Resolver, Query, Int, Args } from '@nestjs/graphql';
import { StatusesHistoryService } from './statuses-history.service';
import { NoteStatusHistory } from '../../entities/note/note-status-history.entity';
import { CurrentUser } from '../auth/auth.decorators';
import { User } from '../../entities/user/user.entity';

@Resolver(() => NoteStatusHistory)
export class StatusesHistoryResolver {
  constructor(private readonly statusesHistoryService: StatusesHistoryService) {}

  @Query(() => [NoteStatusHistory], { name: 'statusesHistory' })
  findAll(@Args('noteId', { type: () => Int }) noteId: number, @CurrentUser() user: User) {
    return this.statusesHistoryService.findAll(noteId, user.id);
  }
}
