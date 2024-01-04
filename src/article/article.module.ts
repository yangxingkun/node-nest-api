import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { ArticleController } from './article.controller';
@Module({
  imports: [ConfigModule],
  controllers: [ArticleController],
})
export class ArticleModule {}
