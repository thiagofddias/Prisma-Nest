import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Full name from user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Define if users its admin' })
  @IsBoolean()
  admin: boolean;
}
