import { Resolver, Query } from '@nestjs/graphql';
import { SourcesService } from './sources.service';
import { NoteSource } from 'src/entities/note/note-source.entity';
import { CurrentUser } from '../auth/auth.decorators';
import { User } from 'src/entities/user/user.entity';

@Resolver(() => NoteSource)
export class SourcesResolver {
  constructor(private readonly sourcesService: SourcesService) {}

  @Query(() => [NoteSource], { name: 'sources' })
  findAll(@CurrentUser() user: User) {
    return this.sourcesService.findAll(user.id);
  }
}
