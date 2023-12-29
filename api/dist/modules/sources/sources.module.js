"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourcesModule = void 0;
const common_1 = require("@nestjs/common");
const sources_service_1 = require("./sources.service");
const sources_resolver_1 = require("./sources.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const note_source_entity_1 = require("../../entities/note/note-source.entity");
let SourcesModule = class SourcesModule {
};
exports.SourcesModule = SourcesModule;
exports.SourcesModule = SourcesModule = __decorate([
    (0, common_1.Module)({
        providers: [sources_resolver_1.SourcesResolver, sources_service_1.SourcesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([note_source_entity_1.NoteSource])],
    })
], SourcesModule);
//# sourceMappingURL=sources.module.js.map