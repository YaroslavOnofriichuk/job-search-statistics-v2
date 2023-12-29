import { Tag } from 'src/entities/tag/tag.entity';
import { Repository } from 'typeorm';
export declare class TagsService {
    private readonly tagsRepository;
    constructor(tagsRepository: Repository<Tag>);
    findAll(userId: number): Promise<Tag[]>;
}
