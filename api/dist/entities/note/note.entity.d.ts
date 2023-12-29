import { User } from '../user/user.entity';
import { NoteSource } from './note-source.entity';
import { NoteTag } from './note-tag.entity';
export declare enum NoteStatus {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    CONSIDERED = "CONSIDERED",
    SENT = "SENT",
    TEST_TASK = "TEST_TASK",
    INTERVIEW = "INTERVIEW"
}
export declare class Note {
    id: number;
    userId: number;
    user: User;
    sourceId: number;
    source: NoteSource;
    position: string;
    company: string;
    link: string;
    description: string;
    status: NoteStatus;
    tags: NoteTag[];
    createdAt: Date;
    updatedAt: Date;
}
