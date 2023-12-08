import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class RefreshInput {
  @IsNotEmpty()
  @IsString()
  @Field({ description: 'JWT refresh token' })
  refreshToken: string;
}
