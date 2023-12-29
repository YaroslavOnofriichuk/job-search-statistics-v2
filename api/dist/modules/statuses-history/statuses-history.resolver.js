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
exports.StatusesHistoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const statuses_history_service_1 = require("./statuses-history.service");
const note_status_history_entity_1 = require("../../entities/note/note-status-history.entity");
const auth_decorators_1 = require("../auth/auth.decorators");
const user_entity_1 = require("../../entities/user/user.entity");
let StatusesHistoryResolver = class StatusesHistoryResolver {
    constructor(statusesHistoryService) {
        this.statusesHistoryService = statusesHistoryService;
    }
    findAll(noteId, user) {
        return this.statusesHistoryService.findAll(noteId, user.id);
    }
};
exports.StatusesHistoryResolver = StatusesHistoryResolver;
__decorate([
    (0, graphql_1.Query)(() => [note_status_history_entity_1.NoteStatusHistory], { name: 'statusesHistory' }),
    __param(0, (0, graphql_1.Args)('noteId', { type: () => graphql_1.Int })),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], StatusesHistoryResolver.prototype, "findAll", null);
exports.StatusesHistoryResolver = StatusesHistoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => note_status_history_entity_1.NoteStatusHistory),
    __metadata("design:paramtypes", [statuses_history_service_1.StatusesHistoryService])
], StatusesHistoryResolver);
//# sourceMappingURL=statuses-history.resolver.js.map