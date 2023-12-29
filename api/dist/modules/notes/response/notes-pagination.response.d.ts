import { Note } from '../../../entities/note/note.entity';
export declare class NotesPaginationResponse {
    notes: Note[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    prevPage: number;
    nextPage: number;
}
