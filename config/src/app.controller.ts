import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from './config/database.config';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
    @Inject(databaseConfig.KEY)
    private readonly database: ConfigType<typeof databaseConfig>,
  ) {}

  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHello(@Param('id') _id: string): string { // 重命名参数
    return _id
    return this.database.host;
    return this.config.get('upload.allowTypes');
    return this.config.get('app.isDev');
    return this.appService.getHello();
    // return process.env.MODE;
    return this.config.get('APP_NAME');
  }
}
