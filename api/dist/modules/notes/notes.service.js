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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const note_entity_1 = require("../../entities/note/note.entity");
const note_source_entity_1 = require("../../entities/note/note-source.entity");
const note_tag_entity_1 = require("../../entities/note/note-tag.entity");
const tag_entity_1 = require("../../entities/tag/tag.entity");
let NotesService = class NotesService {
    constructor(notesRepository, sourcesRepository, noteTagsRepository, tagsRepository) {
        this.notesRepository = notesRepository;
        this.sourcesRepository = sourcesRepository;
        this.noteTagsRepository = noteTagsRepository;
        this.tagsRepository = tagsRepository;
    }
    async create(dto, userId) {
        const source = await this.saveSource(userId, dto.source);
        const note = await this.notesRepository.save({
            position: dto.position,
            company: dto.company,
            link: dto.link,
            description: dto.description,
            status: dto.status,
            userId,
            sourceId: source.id,
            createdAt: dto.createdAt,
        });
        if (dto.tags?.length > 0) {
            this.saveTags(userId, dto.tags, note.id);
        }
        return note;
    }
    async findAll(args, userId) {
        const qb = this.notesRepository.createQueryBuilder("note")
            .leftJoinAndSelect("note.source", "source")
            .where("note.userId = :userId", { userId });
        if (args.search?.trim()) {
            qb.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where(`LOWER(note.position) ~* LOWER(:value)`, {
                    value: args.search.trim(),
                })
                    .orWhere(`LOWER(note.company) ~* LOWER(:value)`, { value: args.search.trim() })
                    .orWhere(`LOWER(note.description) ~* LOWER(:value)`, { value: args.search.trim() });
            }));
        }
        if (args.status) {
            qb.andWhere("note.status = :value", { value: args.status });
        }
        const limit = args.limit || null;
        let currentPage = args.page || null;
        const totalItems = await qb.getCount();
        const totalPages = limit ? Math.ceil(totalItems / limit) : null;
        if (currentPage && totalPages && currentPage > totalPages) {
            currentPage = 1;
        }
        ;
        const paginationSkip = currentPage && limit ? (currentPage - 1) * limit : null;
        if (paginationSkip !== null && limit !== null) {
            qb.skip(paginationSkip);
            qb.take(limit);
        }
        qb.orderBy({ "note.createdAt": args.sort || "DESC" });
        const notes = await qb.getMany();
        return {
            notes,
            currentPage,
            limit,
            totalItems,
            totalPages,
            nextPage: totalPages - currentPage > 0 ? currentPage + 1 : null,
            prevPage: currentPage > 1 && totalPages > 1 ? currentPage - 1 : null,
        };
    }
    async findOne(id, userId) {
        const note = await this.notesRepository.findOne({
            where: { id },
            relations: { source: true, tags: { tag: true } },
        });
        if (!note) {
            throw new common_1.NotFoundException("Note with provided id does not exist");
        }
        ;
        if (note.userId !== userId) {
            throw new common_1.ForbiddenException('You have no access to this resource');
        }
        ;
        return note;
    }
    async update(id, dto, userId) {
        const note = await this.notesRepository.findOne({
            where: { id },
        });
        if (!note) {
            throw new common_1.NotFoundException("Note with provided id does not exist");
        }
        ;
        if (note.userId !== userId) {
            throw new common_1.ForbiddenException('You have no access to this resource');
        }
        ;
        let source;
        if (dto.source) {
            source = await this.saveSource(userId, dto.source);
        }
        const updatedNote = await this.notesRepository.save({
            id,
            position: dto.position ? dto.position : note.position,
            company: dto.company ? dto.company : note.company,
            link: dto.link ? dto.link : note.link,
            description: dto.description ? dto.description : note.description,
            status: dto.status ? dto.status : note.status,
            sourceId: source ? source.id : note.sourceId,
            userId,
        });
        if (dto.tags?.length > 0) {
            this.saveTags(userId, dto.tags, id);
        }
        return updatedNote;
    }
    async remove(id, userId) {
        const note = await this.notesRepository.findOne({
            where: { id },
        });
        if (!note) {
            throw new common_1.NotFoundException("Note with provided id does not exist");
        }
        ;
        if (note.userId !== userId) {
            throw new common_1.ForbiddenException('You have no access to this resource');
        }
        ;
        await this.notesRepository.delete({ id, userId });
        return note;
    }
    async saveSource(userId, name) {
        let source = await this.sourcesRepository.findOne({
            where: { userId, name: name.trim() }
        });
        if (!source) {
            source = await this.sourcesRepository.save({
                userId,
                name: name.trim(),
            });
        }
        return source;
    }
    async saveTags(userId, newTags, noteId) {
        for (const newTag of newTags) {
            let tag = await this.tagsRepository.findOne({
                where: { userId, tag: newTag.trim() },
            });
            if (!tag) {
                tag = await this.tagsRepository.save({
                    userId,
                    tag: newTag.trim(),
                });
            }
            const noteTag = await this.noteTagsRepository.findOne({
                where: { userId, noteId, tagId: tag.id }
            });
            if (!noteTag) {
                await this.noteTagsRepository.save({
                    userId,
                    noteId,
                    tagId: tag.id,
                });
            }
        }
    }
    async getStatistic(userId, tags) {
        const qb = this.notesRepository
            .createQueryBuilder('note');
        if (tags.length > 0) {
            qb.leftJoinAndSelect('note.tags', 'noteTag')
                .leftJoinAndSelect('noteTag.tag', 'tag')
                .select(`COUNT(*) FILTER (WHERE tag.tag IN (${tags.map(tag => `'${tag}'`).join(", ")}))`, 'ALL');
        }
        else {
            qb.select('COUNT(*)', 'ALL');
        }
        Object.values(note_entity_1.NoteStatus).forEach(status => {
            const statusFilter = tags.length > 0
                ? `tag.tag IN (${tags.map(tag => `'${tag}'`).join(", ")}) AND note.status = '${status}'`
                : `note.status = '${status}'`;
            qb.addSelect(`COUNT(*) FILTER (WHERE ${statusFilter})`, status);
        });
        return await qb.where('note.userId = :userId', { userId }).getRawOne();
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.Note)),
    __param(1, (0, typeorm_1.InjectRepository)(note_source_entity_1.NoteSource)),
    __param(2, (0, typeorm_1.InjectRepository)(note_tag_entity_1.NoteTag)),
    __param(3, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], NotesService);
//# sourceMappingURL=notes.service.js.map