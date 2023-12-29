"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusesHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const statuses_history_service_1 = require("./statuses-history.service");
const statuses_history_resolver_1 = require("./statuses-history.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const note_status_history_entity_1 = require("../../entities/note/note-status-history.entity");
let StatusesHistoryModule = class StatusesHistoryModule {
};
exports.StatusesHistoryModule = StatusesHistoryModule;
exports.StatusesHistoryModule = StatusesHistoryModule = __decorate([
    (0, common_1.Module)({
        providers: [statuses_history_resolver_1.StatusesHistoryResolver, statuses_history_service_1.StatusesHistoryService],
        imports: [typeorm_1.TypeOrmModule.forFeature([note_status_history_entity_1.NoteStatusHistory])],
    })
], StatusesHistoryModule);
//# sourceMappingURL=statuses-history.module.js.map