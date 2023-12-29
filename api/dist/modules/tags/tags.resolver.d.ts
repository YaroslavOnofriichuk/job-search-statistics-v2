import { TagsService } from './tags.service';
import { Tag } from '../../entities/tag/tag.entity';
import { User } from '../../entities/user/user.entity';
export declare class TagsResolver {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    findAll(user: User): Promise<Tag[]>;
}
