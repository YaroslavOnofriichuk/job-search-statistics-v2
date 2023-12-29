import { User } from '../user/user.entity';
import { Note } from './note.entity';
import { Tag } from '../tag/tag.entity';
export declare class NoteTag {
    id: number;
    userId: number;
    user: User;
    noteId: number;
    note: Note;
    tagId: number;
    tag: Tag;
}
