import { NoteSource } from '../../entities/note/note-source.entity';
import { Repository } from 'typeorm';
export declare class SourcesService {
    private readonly sourcesRepository;
    constructor(sourcesRepository: Repository<NoteSource>);
    findAll(userId: number): Promise<NoteSource[]>;
    getStatistic(userId: number): Promise<any[]>;
}
