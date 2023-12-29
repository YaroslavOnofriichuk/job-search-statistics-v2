import { User } from '../user/user.entity';
import { Note } from './note.entity';
export declare class NoteSource {
    id: number;
    userId: number;
    user: User;
    name: string;
    notes: Note[];
}
