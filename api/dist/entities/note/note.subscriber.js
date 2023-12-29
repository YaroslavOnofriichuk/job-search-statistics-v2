"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSubscriber = void 0;
const typeorm_1 = require("typeorm");
const note_entity_1 = require("./note.entity");
const note_status_history_entity_1 = require("../note/note-status-history.entity");
let NoteSubscriber = class NoteSubscriber {
    listenTo() {
        return note_entity_1.Note;
    }
    afterInsert(event) {
        event.manager.getRepository(note_status_history_entity_1.NoteStatusHistory).save({
            userId: event.entity.userId,
            noteId: event.entity.id,
            status: event.entity.status,
            description: event.entity.description || null,
        });
    }
    afterUpdate(event) {
        if (event.entity.status && (event.entity.status !== event.databaseEntity.status)) {
            event.manager.getRepository(note_status_history_entity_1.NoteStatusHistory).save({
                userId: event.entity.userId,
                noteId: event.entity.id,
                status: event.entity.status,
                description: event.entity.description || null,
            });
        }
    }
};
exports.NoteSubscriber = NoteSubscriber;
exports.NoteSubscriber = NoteSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], NoteSubscriber);
//# sourceMappingURL=note.subscriber.js.map