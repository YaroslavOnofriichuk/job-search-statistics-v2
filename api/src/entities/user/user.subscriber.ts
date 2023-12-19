import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { User } from './user.entity';
import { NoteSource } from '../note/note-source.entity';

const sources = ['Linkedin', 'Djinni', 'jobs.dou.ua', 'work.ua', 'robota.ua'];

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  afterInsert(event: InsertEvent<User>) {
    event.manager.getRepository(NoteSource).save(
      sources.map((source) => ({
        userId: event.entity.id,
        name: source,
      })),
    );
  }
}
