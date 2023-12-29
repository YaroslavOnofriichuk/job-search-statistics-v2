import { Repository } from 'typeorm';
import { NoteStatusHistory } from '../../entities/note/note-status-history.entity';
export declare class StatusesHistoryService {
    private readonly historyRepository;
    constructor(historyRepository: Repository<NoteStatusHistory>);
    findAll(noteId: number, userId: number): Promise<NoteStatusHistory[]>;
}
