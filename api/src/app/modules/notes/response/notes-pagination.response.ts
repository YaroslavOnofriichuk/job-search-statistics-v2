import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Note } from '../../../../entities/note/note.entity';

@ObjectType()
export class NotesPaginationResponse {
  @Field(() => [Note], { description: "List of notes" })
  notes: Note[];

  @Field(() => Int, { description: "Total number of items", nullable: true })
  totalItems: number;

  @Field(() => Int, { description: "Total number of pages", nullable: true })
  totalPages: number;

  @Field(() => Int, { description: "Current page number", nullable: true })
  currentPage: number;

  @Field(() => Int, { description: "Number of items per page", nullable: true })
  limit: number;

  @Field(() => Int, { description: "Previous page number", nullable: true })
  prevPage: number;

  @Field(() => Int, { description: "Next page number", nullable: true })
  nextPage: number;
}
