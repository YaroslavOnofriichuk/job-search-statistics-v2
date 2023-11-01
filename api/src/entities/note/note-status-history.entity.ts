import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Note, NoteStatus } from './note.entity';

@Entity()
export class NoteStatusHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  noterId: number;

  @ManyToOne(() => Note, { onDelete: 'CASCADE' })
  note: Note;

  @Column({ type: 'enum', enum: NoteStatus, default: NoteStatus.SENT })
  status: NoteStatus;

  @CreateDateColumn()
  createdAt: Date;
}
