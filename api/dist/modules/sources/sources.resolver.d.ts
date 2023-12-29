import { SourcesService } from './sources.service';
import { NoteSource } from 'src/entities/note/note-source.entity';
import { User } from 'src/entities/user/user.entity';
export declare class SourcesResolver {
    private readonly sourcesService;
    constructor(sourcesService: SourcesService);
    findAll(user: User): Promise<NoteSource[]>;
    getStatistic(user: User): Promise<any[]>;
}
