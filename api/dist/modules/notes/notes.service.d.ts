import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { GetNotesArgs } from './dto/get-notes.args';
import { Note, NoteStatus } from '../../entities/note/note.entity';
import { NoteSource } from '../../entities/note/note-source.entity';
import { NoteTag } from '../../entities/note/note-tag.entity';
import { Tag } from '../../entities/tag/tag.entity';
export declare class NotesService {
    private readonly notesRepository;
    private readonly sourcesRepository;
    private readonly noteTagsRepository;
    private readonly tagsRepository;
    constructor(notesRepository: Repository<Note>, sourcesRepository: Repository<NoteSource>, noteTagsRepository: Repository<NoteTag>, tagsRepository: Repository<Tag>);
    create(dto: CreateNoteInput, userId: number): Promise<{
        position: string;
        company: string;
        link: string;
        description: string;
        status: NoteStatus;
        userId: number;
        sourceId: number;
        createdAt: Date;
    } & Note>;
    findAll(args: GetNotesArgs, userId: number): Promise<{
        notes: Note[];
        currentPage: number;
        limit: number;
        totalItems: number;
        totalPages: number;
        nextPage: number;
        prevPage: number;
    }>;
    findOne(id: number, userId: number): Promise<Note>;
    update(id: number, dto: UpdateNoteInput, userId: number): Promise<{
        id: number;
        position: string;
        company: string;
        link: string;
        description: string;
        status: NoteStatus;
        sourceId: number;
        userId: number;
    } & Note>;
    remove(id: number, userId: number): Promise<Note>;
    saveSource(userId: number, name: string): Promise<NoteSource>;
    saveTags(userId: number, newTags: string[], noteId: number): Promise<void>;
    getStatistic(userId: number, tags: string[]): Promise<any>;
}
