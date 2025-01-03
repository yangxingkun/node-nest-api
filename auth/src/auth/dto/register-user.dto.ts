import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsUserAlreadyExist } from '@/validators/is-user-already-exist.validator';

export class RegisterUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须是字符串' })
  @Validate(IsUserAlreadyExist, { message: '用户名已存在!' }) // 应用自定义验证器
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码必须是字符串' })
  password: string;
}
