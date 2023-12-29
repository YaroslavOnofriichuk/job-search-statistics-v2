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
exports.SourcesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const sources_service_1 = require("./sources.service");
const note_source_entity_1 = require("../../entities/note/note-source.entity");
const auth_decorators_1 = require("../auth/auth.decorators");
const user_entity_1 = require("../../entities/user/user.entity");
const sources_statistic_response_1 = require("./sources-statistic.response");
let SourcesResolver = class SourcesResolver {
    constructor(sourcesService) {
        this.sourcesService = sourcesService;
    }
    findAll(user) {
        return this.sourcesService.findAll(user.id);
    }
    getStatistic(user) {
        return this.sourcesService.getStatistic(user.id);
    }
};
exports.SourcesResolver = SourcesResolver;
__decorate([
    (0, graphql_1.Query)(() => [note_source_entity_1.NoteSource], { name: 'sources' }),
    __param(0, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], SourcesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => [sources_statistic_response_1.NoteSourceStatisticResponse], { name: 'sourcesStatistic' }),
    __param(0, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], SourcesResolver.prototype, "getStatistic", null);
exports.SourcesResolver = SourcesResolver = __decorate([
    (0, graphql_1.Resolver)(() => note_source_entity_1.NoteSource),
    __metadata("design:paramtypes", [sources_service_1.SourcesService])
], SourcesResolver);
//# sourceMappingURL=sources.resolver.js.map