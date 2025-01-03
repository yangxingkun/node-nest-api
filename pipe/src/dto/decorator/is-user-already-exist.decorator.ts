import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async validate(username: string, args: ValidationArguments) {
    console.log('[ 00000000000000000000 ] >', username, args);
    const tableName = args.constraints[0];
    let res;
    if (tableName === 'user') {
      res = await this.prisma.user.findFirst({
        where: {
          username: username,
        },
      });
    } else {
      throw new Error('Unsupported table name');
    }

    return !Boolean(res);
  }

  defaultMessage(args: ValidationArguments): string {
    return '用户名已存在';
  }
}
