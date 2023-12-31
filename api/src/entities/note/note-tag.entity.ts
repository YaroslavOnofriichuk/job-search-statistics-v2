import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { Note } from './note.entity';
import { Tag } from '../tag/tag.entity';

@ObjectType()
@Entity()
export class NoteTag {
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
  noteId: number;

  @Field(() => Note)
  @ManyToOne(() => Note, ({tags}) => tags, { onDelete: 'CASCADE' })
  note: Note;

  @Field()
  @Column()
  tagId: number;

  @Field(() => Tag)
  @ManyToOne(() => Tag, ({notes}) => notes, { onDelete: 'CASCADE' })
  tag: Tag;
}
