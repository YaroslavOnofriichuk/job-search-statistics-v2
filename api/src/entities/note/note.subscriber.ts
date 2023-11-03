import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { Note } from './note.entity';
import { NoteStatusHistory } from '../note/note-status-history.entity';

@EventSubscriber()
export class NoteSubscriber implements EntitySubscriberInterface<Note> {
  listenTo() {
    return Note;
  }

  afterInsert(event: InsertEvent<Note>) {
    event.manager.getRepository(NoteStatusHistory).save({
      userId: event.entity.userId,
      noteId: event.entity.id,
      status: event.entity.status,
    });
  }

  afterUpdate(event: UpdateEvent<Note>) {
    if (event.entity.status && event.entity.status !== event.databaseEntity.status) {
      event.manager.getRepository(NoteStatusHistory).save({
        userId: event.entity.userId,
        noteId: event.entity.id,
        status: event.entity.status,
      });
    }
  }
}
