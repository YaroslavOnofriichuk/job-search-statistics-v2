import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { Note } from './note.entity';

@ObjectType()
@Entity()
export class NoteSource {
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
  @Column({ type: 'varchar', length: 128 })
  name: string;

  @Field(() => [Note])
  @OneToMany(() => Note, ({source}) => source)
  notes: Note[];
}
