import { InputType, Field } from '@nestjs/graphql';
import { NoteStatus } from '../../../../entities/note/note.entity';

@InputType()
export class CreateNoteInput {
  @Field({ description: 'Note position' })
  position: string;

  @Field({ description: 'Note company' })
  company: string;

  @Field({ description: 'Note link' })
  link: string;

  @Field({ description: 'Note description', nullable: true })
  description: string;

  @Field({ description: 'Note source' })
  source: string;

  @Field({ description: 'Note status' })
  status: NoteStatus;
}
