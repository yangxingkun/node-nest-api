import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  // async function getCategoryWithArticles(categoryId: number) {
  //   return await this.prisma.category.findUnique({
  //     where: { id: categoryId },
  //     include: {
  //       articles: true,  // 包括关联的文章数据
  //     },
  //   });
  // }
  async categoryExists(dto: CreateArticleDto | UpdateArticleDto) {
    const categoryId = 'categoryId' in dto ? dto.categoryId : undefined
    if (!categoryId) {
      throw new Error('Category ID is required.')
    }
    const categoryExists = await this.prisma.category.findUnique({
      where: {
        id: +categoryId,
      },
    })

    if (!categoryExists) {
      throw new Error(`Category with ID ${categoryId} does not exist.`)
      // throw new HttpException({ message: 'Category ID is required.' }, HttpStatus.BAD_REQUEST)
    }
  }
  async create(createArticleDto: CreateArticleDto) {
    this.categoryExists(createArticleDto)
    return await this.prisma.article.create({
      data: {
        title: createArticleDto.title,
        content: createArticleDto.content,
        categoryId: +createArticleDto.categoryId,
      },
    })
  }

  async findAll({ pageNo = 1, pageSize = 10 }) {
    const res = {
      pageNo,
      pageSize,
      total: await this.prisma.article.count(),
      list: [],
    }
    res.list = await this.prisma.article.findMany({
      skip: (pageNo - 1) * pageSize,
      take: +pageSize,
    })
    return res
  }

  async findOne(id: number) {
    return await this.prisma.article.findFirst({
      where: {
        id,
      },
    })
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    this.categoryExists(updateArticleDto)
    return await this.prisma.article.update({
      where: {
        id,
      },
      data: { ...updateArticleDto, categoryId: +updateArticleDto.categoryId },
    })
  }

  async remove(id: number) {
    return await this.prisma.article.delete({
      where: {
        id,
      },
    })
  }
}
