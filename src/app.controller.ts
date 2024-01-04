import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    // @Inject('hd') private hd: string,
  ) {}
  @Get()
  get() {
    // return this.hd;
    return this.configService.find('upload.exts');
  }
}
