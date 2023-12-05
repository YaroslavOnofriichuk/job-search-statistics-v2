import { Module } from '@nestjs/common';
import { AuthModule as MainAuthModule } from 'src/services/auth/auth.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [MainAuthModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
