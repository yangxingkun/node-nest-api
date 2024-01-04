import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly configService: ConfigService) {}
  @Get()
  get() {
    return this.configService.find('upload.exts');
  }
}
