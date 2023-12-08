import { InputType, Field } from '@nestjs/graphql';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsUrl,
  IsEnum,
  IsArray,
} from 'class-validator';
import { NoteStatus } from '../../../entities/note/note.entity';

@InputType()
export class CreateNoteInput {
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Field({ description: 'Note position' })
  position: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Field({ description: 'Note company' })
  company: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  @IsUrl()
  @Field({ description: 'Note link' })
  link: string;

  @IsOptional()
  @IsString()
  @Field({ description: 'Note description', nullable: true })
  description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Field({ description: 'Note source' })
  source: string;

  @IsOptional()
  @IsEnum(NoteStatus)
  @Field({ description: 'Note status', nullable: true })
  status: NoteStatus;

  @IsOptional()
  @IsDate()
  @Field({ description: 'Note created at', nullable: true })
  createdAt: Date;

  @IsOptional()
  @IsArray()
  @Field(() => [String], { description: 'Note tags', nullable: true })
  tags: string[];
}
