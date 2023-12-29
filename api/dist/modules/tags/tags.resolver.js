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
exports.TagsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tags_service_1 = require("./tags.service");
const tag_entity_1 = require("../../entities/tag/tag.entity");
const auth_decorators_1 = require("../auth/auth.decorators");
const user_entity_1 = require("../../entities/user/user.entity");
let TagsResolver = class TagsResolver {
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    findAll(user) {
        return this.tagsService.findAll(user.id);
    }
};
exports.TagsResolver = TagsResolver;
__decorate([
    (0, graphql_1.Query)(() => [tag_entity_1.Tag], { name: 'tags' }),
    __param(0, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], TagsResolver.prototype, "findAll", null);
exports.TagsResolver = TagsResolver = __decorate([
    (0, graphql_1.Resolver)(() => tag_entity_1.Tag),
    __metadata("design:paramtypes", [tags_service_1.TagsService])
], TagsResolver);
//# sourceMappingURL=tags.resolver.js.map