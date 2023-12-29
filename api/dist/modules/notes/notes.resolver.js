"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const notes_service_1 = require("./notes.service");
const note_entity_1 = require("../../entities/note/note.entity");
const create_note_input_1 = require("./dto/create-note.input");
const update_note_input_1 = require("./dto/update-note.input");
const get_notes_args_1 = require("./dto/get-notes.args");
const notes_pagination_response_1 = require("./response/notes-pagination.response");
const note_status_statistic_response_1 = require("./response/note-status-statistic.response");
const auth_decorators_1 = require("../auth/auth.decorators");
const user_entity_1 = require("../../entities/user/user.entity");
let NotesResolver = class NotesResolver {
    constructor(notesService) {
        this.notesService = notesService;
    }
    createNote(createNoteInput, user) {
        return this.notesService.create(createNoteInput, user.id);
    }
    findAll(getNotesArgs, user) {
        return this.notesService.findAll(getNotesArgs, user.id);
    }
    findOne(id, user) {
        return this.notesService.findOne(id, user.id);
    }
    updateNote(updateNoteInput, user) {
        return this.notesService.update(updateNoteInput.id, updateNoteInput, user.id);
    }
    removeNote(id, user) {
        return this.notesService.remove(id, user.id);
    }
    getStatistic(tags, user) {
        return this.notesService.getStatistic(user.id, tags);
    }
};
exports.NotesResolver = NotesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => note_entity_1.Note),
    __param(0, (0, graphql_1.Args)('createNoteInput')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_input_1.CreateNoteInput,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], NotesResolver.prototype, "createNote", null);
__decorate([
    (0, graphql_1.Query)(() => notes_pagination_response_1.NotesPaginationResponse, { name: 'notes' }),
    __param(0, (0, graphql_1.Args)('getNotesArgs')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_notes_args_1.GetNotesArgs,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], NotesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => note_entity_1.Note, { name: 'note' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], NotesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => note_entity_1.Note),
    __param(0, (0, graphql_1.Args)('updateNoteInput')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_note_input_1.UpdateNoteInput,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], NotesResolver.prototype, "updateNote", null);
__decorate([
    (0, graphql_1.Mutation)(() => note_entity_1.Note),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], NotesResolver.prototype, "removeNote", null);
__decorate([
    (0, graphql_1.Query)(() => note_status_statistic_response_1.NoteStatusStatisticResponse, { name: 'statusStatistic' }),
    __param(0, (0, graphql_1.Args)('tags', { type: () => [String] })),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], NotesResolver.prototype, "getStatistic", null);
exports.NotesResolver = NotesResolver = __decorate([
    (0, graphql_1.Resolver)(() => note_entity_1.Note),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesResolver);
//# sourceMappingURL=notes.resolver.js.map