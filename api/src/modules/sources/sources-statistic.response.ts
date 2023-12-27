import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class NoteSourceStatisticResponse {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  ACCEPTED: number;

  @Field(() => Int)
  REJECTED: number;

  @Field(() => Int)
  CONSIDERED: number;

  @Field(() => Int)
  SENT: number;

  @Field(() => Int)
  TEST_TASK: number;

  @Field(() => Int)
  INTERVIEW: number;
}