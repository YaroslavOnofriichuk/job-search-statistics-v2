import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { NoteTag } from '../note/note-tag.entity';

@ObjectType()
@Entity()
export class Tag {
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
  @Column({ type: 'varchar', length: 32 })
  tag: string;

  @Field(type => [NoteTag])
  @OneToMany(() => NoteTag, ({tag}) => tag)
  notes: NoteTag[];
}
