import { IsNotEmpty } from 'class-validator'

export class CreateArticleDto {
  @IsNotEmpty({ message: '标题不能为空' })
  title: string

  @IsNotEmpty({ message: '内容不能为空' })
  content: string

  @IsNotEmpty()
  categoryId: number // 确保这里匹配您的数据库模型中的字段类型和名称
}
