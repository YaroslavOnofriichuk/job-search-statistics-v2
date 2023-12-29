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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../entities/user/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const auth_constants_1 = require("./auth.constants");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async register(authInput) {
        const user = await this.usersRepository
            .createQueryBuilder()
            .where(`LOWER("User"."email") = LOWER(:email)`, { email: authInput.email })
            .getOne();
        if (user)
            throw new common_1.BadRequestException('User with provided email already exists');
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(authInput.password, saltOrRounds);
        const newUser = await this.usersRepository.save({
            email: authInput.email,
            password: hash,
        });
        const payload = { id: newUser.id, email: newUser.email };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, auth_constants_1.jwtConstants.access),
            this.jwtService.signAsync(payload, auth_constants_1.jwtConstants.refresh),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async login(authInput) {
        const user = await this.usersRepository
            .createQueryBuilder()
            .where(`LOWER("User"."email") = LOWER(:email)`, { email: authInput.email })
            .getOne();
        if (!user)
            throw new common_1.BadRequestException('Wrong email or password');
        const isMatch = await bcrypt.compare(authInput.password, user.password);
        if (!isMatch)
            throw new common_1.BadRequestException('Wrong email or password');
        const payload = { id: user.id, email: user.email };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, auth_constants_1.jwtConstants.access),
            this.jwtService.signAsync(payload, auth_constants_1.jwtConstants.refresh),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async refresh(refreshInput) {
        try {
            const payload = await this.jwtService.verifyAsync(refreshInput.refreshToken, {
                secret: auth_constants_1.jwtConstants.refresh.secret
            });
            const user = await this.usersRepository
                .createQueryBuilder()
                .where(`"User"."id" = :id`, { id: payload.id })
                .getOne();
            if (!user)
                throw new common_1.UnauthorizedException();
            const newPayload = { id: user.id, email: user.email };
            const [accessToken, refreshToken] = await Promise.all([
                this.jwtService.signAsync(newPayload, auth_constants_1.jwtConstants.access),
                this.jwtService.signAsync(newPayload, auth_constants_1.jwtConstants.refresh),
            ]);
            return {
                accessToken,
                refreshToken,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map