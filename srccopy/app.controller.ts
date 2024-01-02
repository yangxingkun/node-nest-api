import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigType } from './types/config';
import { DbService } from './db.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('ConfigService')
    private ConfigService: Record<string, any> | ConfigType,

    @Inject('DbService')
    private dbService: DbService,
  ) {}

  @Get()
  get() {
    return this.dbService.connect();
  }

  // get() {
  //   return this.ConfigService.url;
  // }

  // @Get()
  // get(): string {
  //   return this.appService.find();
  // }
  // @Get('/hd')
  // fineOne(): string {
  //   return this.appService.fineOne();
  // }
}
