import { NotesService } from './notes.service';
import { Note } from '../../entities/note/note.entity';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { GetNotesArgs } from './dto/get-notes.args';
import { User } from '../../entities/user/user.entity';
export declare class NotesResolver {
    private readonly notesService;
    constructor(notesService: NotesService);
    createNote(createNoteInput: CreateNoteInput, user: User): Promise<{
        position: string;
        company: string;
        link: string;
        description: string;
        status: import("../../entities/note/note.entity").NoteStatus;
        userId: number;
        sourceId: number;
        createdAt: Date;
    } & Note>;
    findAll(getNotesArgs: GetNotesArgs, user: User): Promise<{
        notes: Note[];
        currentPage: number;
        limit: number;
        totalItems: number;
        totalPages: number;
        nextPage: number;
        prevPage: number;
    }>;
    findOne(id: number, user: User): Promise<Note>;
    updateNote(updateNoteInput: UpdateNoteInput, user: User): Promise<{
        id: number;
        position: string;
        company: string;
        link: string;
        description: string;
        status: import("../../entities/note/note.entity").NoteStatus;
        sourceId: number;
        userId: number;
    } & Note>;
    removeNote(id: number, user: User): Promise<Note>;
    getStatistic(tags: string[], user: User): Promise<any>;
}
