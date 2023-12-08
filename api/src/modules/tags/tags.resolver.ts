import { Resolver, Query } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { Tag } from 'src/entities/tag/tag.entity';
import { CurrentUser } from '../auth/auth.decorators';
import { User } from 'src/entities/user/user.entity';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Query(() => [Tag], { name: 'tags' })
  findAll(@CurrentUser() user: User) {
    return this.tagsService.findAll(user.id);
  }
}
