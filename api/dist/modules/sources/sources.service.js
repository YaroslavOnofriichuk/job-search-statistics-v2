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
exports.SourcesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const note_source_entity_1 = require("../../entities/note/note-source.entity");
const typeorm_2 = require("typeorm");
const note_entity_1 = require("../../entities/note/note.entity");
let SourcesService = class SourcesService {
    constructor(sourcesRepository) {
        this.sourcesRepository = sourcesRepository;
    }
    async findAll(userId) {
        return await this.sourcesRepository.find({
            where: { userId },
        });
    }
    async getStatistic(userId) {
        const qb = this.sourcesRepository.createQueryBuilder('source')
            .select(['source.id', 'source.name'])
            .addSelect('source.id', 'id')
            .addSelect('source.name', 'name');
        Object.values(note_entity_1.NoteStatus).forEach(status => {
            qb.addSelect(`COUNT(n.id) FILTER (WHERE n.status = '${status}')`, status);
        });
        const result = await qb
            .leftJoin('source.notes', 'n', 'n.userId = :userId')
            .where('source.userId = :userId', { userId })
            .groupBy('source.id')
            .getRawMany();
        return result;
    }
};
exports.SourcesService = SourcesService;
exports.SourcesService = SourcesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_source_entity_1.NoteSource)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SourcesService);
//# sourceMappingURL=sources.service.js.map