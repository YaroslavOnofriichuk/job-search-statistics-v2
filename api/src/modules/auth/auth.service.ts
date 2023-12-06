import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthInput } from './dto/auth.input';
import { RefreshInput } from './dto/refresh.input';
import { User } from '../../entities/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(authInput: AuthInput) {
    const user = await this.usersRepository
      .createQueryBuilder()
      .where(`LOWER("User"."email") = LOWER(:email)`, { email: authInput.email })
      .getOne();

    if (user)
      throw new BadRequestException('User with provided email already exists');

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(authInput.password, saltOrRounds);

    const newUser = await this.usersRepository.save({
      email: authInput.email,
      password: hash,
    });

    const payload = { id: newUser.id, email: newUser.email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, jwtConstants.access),
      this.jwtService.signAsync(payload, jwtConstants.refresh),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async login(authInput: AuthInput) {
    const user = await this.usersRepository
      .createQueryBuilder()
      .where(`LOWER("User"."email") = LOWER(:email)`, { email: authInput.email })
      .getOne();

    if (!user) throw new BadRequestException('Wrong email or password');

    const isMatch = await bcrypt.compare(authInput.password, user.password);

    if (!isMatch) throw new BadRequestException('Wrong email or password');

    const payload = { id: user.id, email: user.email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, jwtConstants.access),
      this.jwtService.signAsync(payload, jwtConstants.refresh),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refresh(refreshInput: RefreshInput) {
    try {
      const payload = await this.jwtService.verifyAsync(
        refreshInput.refreshToken,
        {
          secret: jwtConstants.refresh.secret
        }
      );

      const user = await this.usersRepository
        .createQueryBuilder()
        .where(`"User"."id" = :id`, { id: payload.id })
        .getOne()

      if (!user) throw new UnauthorizedException();

      const newPayload = { id: user.id, email: user.email };

      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(newPayload, jwtConstants.access),
        this.jwtService.signAsync(newPayload, jwtConstants.refresh),
      ]);

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException();
    }
  }
}
