import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalValidate } from './global.validate';
import { ValidateExceptionFilter } from './filter/validate-exception.filter';

//全局范围内未处理的 HTTP 异常将由 HttpExceptionFilter 统一处理。
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // new ValidationPipe({
    //   whitelist: true, // 剔除 DTO 中未定义的属性
    //   forbidNonWhitelisted: true, // 若请求中有未定义的属性，直接抛出错误
    //   transform: true, // 自动将 payload 转换为对应的 DTO 实例
    // }),
    new GlobalValidate(),
  );
  app.useGlobalFilters(new ValidateExceptionFilter());

  await app.listen(3000);
}
bootstrap();
//规则：类进行验证，属性进行验证