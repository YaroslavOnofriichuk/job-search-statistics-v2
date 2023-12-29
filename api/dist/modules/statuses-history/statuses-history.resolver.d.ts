import { StatusesHistoryService } from './statuses-history.service';
import { NoteStatusHistory } from '../../entities/note/note-status-history.entity';
import { User } from '../../entities/user/user.entity';
export declare class StatusesHistoryResolver {
    private readonly statusesHistoryService;
    constructor(statusesHistoryService: StatusesHistoryService);
    findAll(noteId: number, user: User): Promise<NoteStatusHistory[]>;
}
