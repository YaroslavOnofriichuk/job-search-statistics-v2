import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { Note } from './note.entity';
export declare class NoteSubscriber implements EntitySubscriberInterface<Note> {
    listenTo(): typeof Note;
    afterInsert(event: InsertEvent<Note>): void;
    afterUpdate(event: UpdateEvent<Note>): void;
}
