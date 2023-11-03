import { Field, InputType, PickType,Int } from '@nestjs/graphql';
import {
  IsOptional,
  IsInt,
  Min,
  IsEnum,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { UpdateNoteInput } from './update-note.input';

enum SortType {
  ASC = "ASC",
  DESC = "DESC",
}

@InputType()
class Filters extends PickType(UpdateNoteInput, [
  'position', 'company', 'description', 'status'
] as const) {}


@InputType()
export class GetNotesArgs {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { description: 'Page', nullable: true })
  page: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { description: 'Limit', nullable: true })
  limit: number;

  @IsOptional()
  @IsEnum(SortType)
  @Field({ description: 'Sort', nullable: true })
  sort: SortType;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Field({ description: 'Filters', nullable: true })
  filters: Filters;
}
