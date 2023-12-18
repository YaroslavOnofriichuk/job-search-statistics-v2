import { CreateNoteInput } from './create-note.input';
import { InputType, Field, ID, PartialType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

@InputType()
export class UpdateNoteInput extends PartialType(CreateNoteInput) {
  @IsNotEmpty()
  @IsInt()
  // @Min(1)
  @Field(() => Int)
  id: number;
}
