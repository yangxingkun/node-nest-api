import { IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { Match } from './decorator/match.decorator';
import { IsUserAlreadyExist } from './decorator/is-user-already-exist.decorator';

export class RegisterUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Validate(IsUserAlreadyExist, ['user'], { message: '用户名已存在' })
  username: string;

  @IsString()
  @Match('confirmPassword')
  password: string;

  //   confirmPassword: string;
  //   @IsNotEmpty({ message: '用户名不能为空' })
  //   username: string;
  //   password: string;
  //   confirmPassword: string;
}
