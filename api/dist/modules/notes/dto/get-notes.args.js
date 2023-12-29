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
exports.GetNotesArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const note_entity_1 = require("../../../entities/note/note.entity");
var SortType;
(function (SortType) {
    SortType["ASC"] = "ASC";
    SortType["DESC"] = "DESC";
})(SortType || (SortType = {}));
let GetNotesArgs = class GetNotesArgs {
};
exports.GetNotesArgs = GetNotesArgs;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Page', nullable: true }),
    __metadata("design:type", Number)
], GetNotesArgs.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Limit', nullable: true }),
    __metadata("design:type", Number)
], GetNotesArgs.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(SortType),
    (0, graphql_1.Field)({ description: 'Sort', nullable: true }),
    __metadata("design:type", String)
], GetNotesArgs.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(note_entity_1.NoteStatus),
    (0, graphql_1.Field)({ description: 'Status', nullable: true }),
    __metadata("design:type", String)
], GetNotesArgs.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String, { description: 'Search', nullable: true }),
    __metadata("design:type", String)
], GetNotesArgs.prototype, "search", void 0);
exports.GetNotesArgs = GetNotesArgs = __decorate([
    (0, graphql_1.InputType)()
], GetNotesArgs);
//# sourceMappingURL=get-notes.args.js.map