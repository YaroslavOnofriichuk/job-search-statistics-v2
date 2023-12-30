import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class AuthInput {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(128)
  @Field({ description: 'Email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(128)
  @Field({ description: 'Password' })
  password: string;
}
