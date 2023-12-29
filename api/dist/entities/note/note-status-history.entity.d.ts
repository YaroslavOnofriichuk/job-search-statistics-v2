import { User } from '../user/user.entity';
import { Note, NoteStatus } from './note.entity';
export declare class NoteStatusHistory {
    id: number;
    userId: number;
    user: User;
    noteId: number;
    note: Note;
    status: NoteStatus;
    description: string;
    createdAt: Date;
}
