import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsOptional,
  IsInt,
  Min,
  IsEnum,
  IsString,
} from 'class-validator';
import { NoteStatus } from '../../../../entities/note/note.entity';

enum SortType {
  ASC = "ASC",
  DESC = "DESC",
}

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
  @IsEnum(NoteStatus)
  @Field({ description: 'Status', nullable: true })
  status: NoteStatus;

  @IsOptional()
  @IsString()
  @Field(() => String, { description: 'Search', nullable: true })
  search: string;
}
