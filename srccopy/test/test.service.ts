import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  @Get()
  findTest() {
    return `引用我是test服务`;
  }
}
