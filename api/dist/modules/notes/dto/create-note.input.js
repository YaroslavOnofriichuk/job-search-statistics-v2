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
exports.CreateNoteInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const note_entity_1 = require("../../../entities/note/note.entity");
let CreateNoteInput = class CreateNoteInput {
};
exports.CreateNoteInput = CreateNoteInput;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128),
    (0, graphql_1.Field)({ description: 'Note position' }),
    __metadata("design:type", String)
], CreateNoteInput.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128),
    (0, graphql_1.Field)({ description: 'Note company' }),
    __metadata("design:type", String)
], CreateNoteInput.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(256),
    (0, class_validator_1.IsUrl)(),
    (0, graphql_1.Field)({ description: 'Note link' }),
    __metadata("design:type", String)
], CreateNoteInput.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ description: 'Note description', nullable: true }),
    __metadata("design:type", String)
], CreateNoteInput.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128),
    (0, graphql_1.Field)({ description: 'Note source' }),
    __metadata("design:type", String)
], CreateNoteInput.prototype, "source", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(note_entity_1.NoteStatus),
    (0, graphql_1.Field)({ description: 'Note status', nullable: true }),
    __metadata("design:type", String)
], CreateNoteInput.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, graphql_1.Field)({ description: 'Note created at', nullable: true }),
    __metadata("design:type", Date)
], CreateNoteInput.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, graphql_1.Field)(() => [String], { description: 'Note tags', nullable: true }),
    __metadata("design:type", Array)
], CreateNoteInput.prototype, "tags", void 0);
exports.CreateNoteInput = CreateNoteInput = __decorate([
    (0, graphql_1.InputType)()
], CreateNoteInput);
//# sourceMappingURL=create-note.input.js.map