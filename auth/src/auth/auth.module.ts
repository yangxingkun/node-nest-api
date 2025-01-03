import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { IsUserAlreadyExist } from '@/validators/is-user-already-exist.validator';

@Module({
  providers: [AuthService], // 注册服务和自定义验证器
  controllers: [AuthController],
  // exports: [IsUserAlreadyExist], // 如果其他模块需要这个验证器，可以导出
})
export class AuthModule {}
