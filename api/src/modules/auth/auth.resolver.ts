import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Public } from './auth.decorators';
import { AuthService } from './auth.service';
import { AuthResponse } from './response/auth.response';
import { AuthInput } from './dto/auth.input';
import { RefreshInput } from './dto/refresh.input';

@Resolver(() => AuthResponse)
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Mutation(() => AuthResponse)
  register(@Args('authInput') authInput: AuthInput) {
    return this.service.register(authInput);
  }

  @Public()
  @Mutation(() => AuthResponse)
  login(@Args('authInput') authInput: AuthInput) {
    return this.service.login(authInput);
  }

  @Public()
  @Mutation(() => AuthResponse)
  refresh(@Args('refreshInput') refreshInput: RefreshInput) {
    return this.service.refresh(refreshInput);
  }
}
