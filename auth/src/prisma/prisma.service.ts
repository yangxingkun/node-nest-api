import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({ log: ['query'] });
  }
  // 在模块初始化时连接数据库
  async onModuleInit() {
    await this.$connect();
    console.log('Prisma connected to database');
  }

  // 在模块销毁时断开数据库连接
  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Prisma disconnected from database');
  }
}
