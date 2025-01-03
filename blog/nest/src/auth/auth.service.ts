/*
 * @Author: yangxingkun 1612166244@qq.com
 * @Date: 2024-12-26 15:16:51
 * @LastEditors: yangxingkun 1612166244@qq.com
 * @LastEditTime: 2025-01-02 14:05:51
 * @FilePath: /blog/nest/src/auth/auth.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PrismaService } from '@/prisma/prisma.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { hash, verify } from 'argon2'
import LoginDto from './dto/login.dto'
import RegisterDto from './dto/register.dto'
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}
  async register(dto: RegisterDto) {
    const user = await this.prismaService.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })

    return this.token(user)
  }

  async login(dto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        name: dto.name,
      },
    })
    if (!(await verify(user.password, dto.password))) {
      throw new HttpException('密码错误', HttpStatus.BAD_REQUEST)
    }
    return this.token(user)
  }
  private async token({ name, id }) {
    return {
      token: await this.jwtService.signAsync({
        name,
        sub: id,
      }),
    }
  }
}
