import { User } from '../user/user.entity';
import { NoteTag } from '../note/note-tag.entity';
export declare class Tag {
    id: number;
    userId: number;
    user: User;
    tag: string;
    notes: NoteTag[];
}
