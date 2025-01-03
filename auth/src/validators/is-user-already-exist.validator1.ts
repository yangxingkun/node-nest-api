import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
@Injectable()
@ValidatorConstraint({ async: true })
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}
  async validate(
    username: string,
    args: ValidationArguments,
  ): Promise<boolean> {
    const user = await this.prisma.user.findFirst({
      where: { username },
    });
    console.log('[ args ] >', this.prisma, username, args);
    // const user = await this.authService.checkUserExist(username);
    console.log('[ user ] >', user);
    return !user; // 如果用户不存在，验证通过
  }

  defaultMessage(): string {
    return '用户名已存在';
  }
}
