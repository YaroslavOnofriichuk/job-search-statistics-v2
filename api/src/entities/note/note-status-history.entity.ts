import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { Note, NoteStatus } from './note.entity';

@ObjectType()
@Entity()
export class NoteStatusHistory {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  userId: number;

  @Field(type => User)
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Field()
  @Column()
  noteId: number;

  @Field(type => Note)
  @ManyToOne(() => Note, { onDelete: 'CASCADE' })
  note: Note;

  @Field()
  @Column({ type: 'enum', enum: NoteStatus, default: NoteStatus.SENT })
  status: NoteStatus;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
