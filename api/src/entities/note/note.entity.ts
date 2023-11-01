import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';
import { NoteSource } from './note-source.entity';

export enum NoteStatus {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  CONSIDERED = 'CONSIDERED',
  SENT = 'SENT',
  TEST_TASK = 'TEST_TASK',
  INTERVIEW = 'INTERVIEW',
}

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  sourceId: number;

  @ManyToOne(() => NoteSource, { onDelete: 'CASCADE' })
  source: NoteSource;

  @Column({ type: 'varchar', length: 128 })
  position: string;

  @Column({ type: 'varchar', length: 128 })
  company: string;

  @Column({ type: 'varchar', length: 256 })
  link: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'enum', enum: NoteStatus, default: NoteStatus.SENT })
  status: NoteStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
