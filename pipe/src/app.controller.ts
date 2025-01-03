import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { HdPipe } from './hd/hd.pipe';
import { CreateArticleDto } from './dto/create.article.dto';
import { ValidateExceptionFilter } from './filter/validate-exception.filter';
@Controller()
export class AppController {
  prisma: PrismaClient;
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient();
  }

  @Get(':id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.prisma.article.findUnique({
      where: {
        id,
      },
    });
  }
  @Post('store')
  // @UseFilters(ValidateExceptionFilter)
  add(@Body() dto: CreateArticleDto) {
    return this.prisma.article.create({
      data: {
        title: dto.title,
        content: dto.content,
      },
    });
  }
}
