import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'

import { ConfigModule } from '@nestjs/config'
import { ArticleModule } from './article/article.module'
import { PrismaModule } from './prisma/prisma.module'
import { CategoryModule } from './category/category.module'
import { UploadService } from './upload/upload.service'
import { UploadModule } from './upload/upload.module'

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ArticleModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CategoryModule,
    UploadModule,
  ],
  providers: [UploadService],
})
export class AppModule {}
