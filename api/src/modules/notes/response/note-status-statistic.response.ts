import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class NoteStatusStatisticResponse {
  @Field(() => Int)
  ALL: number;

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