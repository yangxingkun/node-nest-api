import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';
import { ArticleModule } from './article/article.module';
import path from 'path';

const configPath = {
  path: path.resolve(__dirname, './configure'),
};
console.log('configPath', configPath);
@Module({
  imports: [ConfigModule.register(configPath), ArticleModule],
  controllers: [AppController, ArticleController],
  providers: [AppService, ArticleService],
})
export class AppModule {}
