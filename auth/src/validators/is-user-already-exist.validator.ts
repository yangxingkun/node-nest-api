import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async validate(username: string, args: ValidationArguments) {
    // console.log('[ 00000000000000000000 ] >', username, args);
    const res = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    return !Boolean(res);
  }

  defaultMessage(args): string {
    console.log('[ args ] >', args)
    return `用户名已经存在啦`;
  }
}
