import { IsNotEmpty, Length } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty({ message: '标题不能为空' })
  @Length(1, 5, { message: '标题长度在1-5之间' })
  title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  //   @Length(1, 5, { message: '内容长度在1-5之间' })
  content: string;
}
