import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from '../entities/user/user.entity';
import { UserSubscriber } from '../entities/user/user.subscriber';
import { Note } from '../entities/note/note.entity';
import { NoteSource } from '../entities/note/note-source.entity';
import { NoteStatusHistory } from '../entities/note/note-status-history.entity';
import { Tag } from '../entities/tag/tag.entity';
import { NoteTag } from '../entities/note/note-tag.entity';
import { join } from 'path';

export const dbConf: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Note, NoteSource, NoteStatusHistory, Tag, NoteTag],
  subscribers: [UserSubscriber],
  migrations: [join(process.cwd(), 'migrations', '*.js')],
  synchronize: false,
  logging: true,
};
