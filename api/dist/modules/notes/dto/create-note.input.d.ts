import { NoteStatus } from '../../../entities/note/note.entity';
export declare class CreateNoteInput {
    position: string;
    company: string;
    link: string;
    description: string;
    source: string;
    status: NoteStatus;
    createdAt: Date;
    tags: string[];
}
