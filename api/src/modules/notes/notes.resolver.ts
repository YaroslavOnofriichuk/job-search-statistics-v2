import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotesService } from './notes.service';
import { Note } from '../../entities/note/note.entity'
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { GetNotesArgs } from './dto/get-notes.args';
import { NotesPaginationResponse } from './response/notes-pagination.response';
import { NoteStatusStatisticResponse } from './response/note-status-statistic.response';
import { CurrentUser } from '../auth/auth.decorators';
import { User } from '../../entities/user/user.entity';

@Resolver(() => Note)
export class NotesResolver {
  constructor(private readonly notesService: NotesService) {}

  @Mutation(() => Note)
  createNote(
    @Args('createNoteInput') createNoteInput: CreateNoteInput, 
    @CurrentUser() user: User
    ) {
    return this.notesService.create(createNoteInput, user.id);
  }

  @Query(() => NotesPaginationResponse, { name: 'notes' })
  findAll(
    @Args('getNotesArgs') getNotesArgs: GetNotesArgs, 
    @CurrentUser() user: User
  ) {
    return this.notesService.findAll(getNotesArgs, user.id);
  }

  @Query(() => Note, { name: 'note' })
  findOne(
    @Args('id', { type: () => Int }) id: number, 
    @CurrentUser() user: User
  ) {
    return this.notesService.findOne(id, user.id);
  }

  @Mutation(() => Note)
  updateNote(
    @Args('updateNoteInput') updateNoteInput: UpdateNoteInput, 
    @CurrentUser() user: User
  ) {
    return this.notesService.update(updateNoteInput.id, updateNoteInput, user.id);
  }

  @Mutation(() => Note)
  removeNote(
    @Args('id', { type: () => Int }) id: number, 
    @CurrentUser() user: User
  ) {
    return this.notesService.remove(id, user.id);
  }

  @Query(() => NoteStatusStatisticResponse, { name: 'statusStatistic' })
  getStatistic(@CurrentUser() user: User) {
    return this.notesService.getStatistic(user.id);
  }
}
