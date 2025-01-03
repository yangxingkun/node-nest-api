import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from '../dto/register.user.dto';
import { PrismaClient } from '@prisma/client';

@Controller('users')
export class UserController {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    // return registerUserDto;
    try {
      const user = await this.prisma.user.create({
        data: {
          username: registerUserDto.username,
          password: registerUserDto.password,
        },
      });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('注册失败');
    }
  }
}
