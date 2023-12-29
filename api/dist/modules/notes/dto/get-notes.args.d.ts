import { NoteStatus } from '../../../entities/note/note.entity';
declare enum SortType {
    ASC = "ASC",
    DESC = "DESC"
}
export declare class GetNotesArgs {
    page: number;
    limit: number;
    sort: SortType;
    status: NoteStatus;
    search: string;
}
export {};
