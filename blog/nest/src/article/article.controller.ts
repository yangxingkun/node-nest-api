import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @Get()
  async findAll(@Query() page: any) {
    return await this.articleService.findAll(page)
  }
  // @Get("/categorylist")
  // async getCategoryWithArticles(@Query() id) {
  //   return await this.articleService.getCategoryWithArticles(id)
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.articleService.findOne(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return await this.articleService.update(+id, updateArticleDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.articleService.remove(+id)
  }
}
