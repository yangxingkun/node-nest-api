import { compareWithArgon2, hashWithArgon2 } from '@/utils/hash';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {
    // this.prisma = new PrismaService();
  }
  async register(registerDto: RegisterUserDto): Promise<any> {
    const { username, password } = registerDto;
    // console.log('[ this.prisma ] >', this.prisma)
    const user = this.prisma.user.create({
      data: {
        username,
        password: await hashWithArgon2(password),
      },
    });
    delete registerDto.password;
    return user;
  }
  async login(loginDto: LoginUserDto): Promise<any> {
    const { username, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new UnauthorizedException('用户名或密码错误');
    }

    const isPasswordValid = await compareWithArgon2(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('用户名或密码错误');
    }

    delete user.password; // 不返回密码
    return user;
  }

  async checkUserExist(username: string) {
    return await this.prisma.user.findUnique({
      where: { username },
    });
  }
}
