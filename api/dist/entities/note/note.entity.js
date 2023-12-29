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
exports.Note = exports.NoteStatus = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../user/user.entity");
const note_source_entity_1 = require("./note-source.entity");
const note_tag_entity_1 = require("./note-tag.entity");
var NoteStatus;
(function (NoteStatus) {
    NoteStatus["ACCEPTED"] = "ACCEPTED";
    NoteStatus["REJECTED"] = "REJECTED";
    NoteStatus["CONSIDERED"] = "CONSIDERED";
    NoteStatus["SENT"] = "SENT";
    NoteStatus["TEST_TASK"] = "TEST_TASK";
    NoteStatus["INTERVIEW"] = "INTERVIEW";
})(NoteStatus || (exports.NoteStatus = NoteStatus = {}));
let Note = class Note {
};
exports.Note = Note;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Note.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Note.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], Note.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Note.prototype, "sourceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => note_source_entity_1.NoteSource),
    (0, typeorm_1.ManyToOne)(() => note_source_entity_1.NoteSource, { onDelete: 'CASCADE' }),
    __metadata("design:type", note_source_entity_1.NoteSource)
], Note.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Note.prototype, "position", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Note.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Note.prototype, "link", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'enum', enum: NoteStatus, default: NoteStatus.SENT }),
    __metadata("design:type", String)
], Note.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => [note_tag_entity_1.NoteTag]),
    (0, typeorm_1.OneToMany)(() => note_tag_entity_1.NoteTag, ({ note }) => note),
    __metadata("design:type", Array)
], Note.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Note.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Note.prototype, "updatedAt", void 0);
exports.Note = Note = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Note);
//# sourceMappingURL=note.entity.js.map