import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { NoteSource } from './note-source.entity';
import { NoteTag } from './note-tag.entity';

export enum NoteStatus {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  CONSIDERED = 'CONSIDERED',
  SENT = 'SENT',
  TEST_TASK = 'TEST_TASK',
  INTERVIEW = 'INTERVIEW',
}

@ObjectType()
@Entity()
export class Note {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Field()
  @Column()
  sourceId: number;

  @Field(() => NoteSource)
  @ManyToOne(() => NoteSource, { onDelete: 'CASCADE' })
  source: NoteSource;

  @Field()
  @Column({ type: 'varchar', length: 128 })
  position: string;

  @Field()
  @Column({ type: 'varchar', length: 128 })
  company: string;

  @Column({ type: 'varchar', length: 256 })
  link: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  description: string;

  @Field()
  @Column({ type: 'enum', enum: NoteStatus, default: NoteStatus.SENT })
  status: NoteStatus;

  @Field(() => [NoteTag])
  @OneToMany(() => NoteTag, ({note}) => note)
  tags: NoteTag[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
