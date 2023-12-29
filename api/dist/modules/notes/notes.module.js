"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notes_service_1 = require("./notes.service");
const notes_resolver_1 = require("./notes.resolver");
const note_entity_1 = require("../../entities/note/note.entity");
const note_source_entity_1 = require("../../entities/note/note-source.entity");
const note_tag_entity_1 = require("../../entities/note/note-tag.entity");
const tag_entity_1 = require("../../entities/tag/tag.entity");
let NotesModule = class NotesModule {
};
exports.NotesModule = NotesModule;
exports.NotesModule = NotesModule = __decorate([
    (0, common_1.Module)({
        providers: [notes_resolver_1.NotesResolver, notes_service_1.NotesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([note_entity_1.Note, note_source_entity_1.NoteSource, note_tag_entity_1.NoteTag, tag_entity_1.Tag])],
    })
], NotesModule);
//# sourceMappingURL=notes.module.js.map