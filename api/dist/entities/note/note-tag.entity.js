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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteTag = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../user/user.entity");
const note_entity_1 = require("./note.entity");
const tag_entity_1 = require("../tag/tag.entity");
let NoteTag = class NoteTag {
};
exports.NoteTag = NoteTag;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NoteTag.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NoteTag.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], NoteTag.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NoteTag.prototype, "noteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => note_entity_1.Note),
    (0, typeorm_1.ManyToOne)(() => note_entity_1.Note, ({ tags }) => tags, { onDelete: 'CASCADE' }),
    __metadata("design:type", note_entity_1.Note)
], NoteTag.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NoteTag.prototype, "tagId", void 0);
__decorate([
    (0, graphql_1.Field)(() => tag_entity_1.Tag),
    (0, typeorm_1.ManyToOne)(() => tag_entity_1.Tag, ({ notes }) => notes, { onDelete: 'CASCADE' }),
    __metadata("design:type", tag_entity_1.Tag)
], NoteTag.prototype, "tag", void 0);
exports.NoteTag = NoteTag = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], NoteTag);
//# sourceMappingURL=note-tag.entity.js.map