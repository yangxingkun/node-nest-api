import { Controller, Get, Inject } from '@nestjs/common';
import { TestService } from '../test/test.service';

@Controller('qd')
export class QdController {
  constructor(
    private readonly testService: TestService,
    @Inject('test') private readonly test: string,
  ) {}
  @Get()
  get() {
    return `前端服务～～～3${this.testService.findTest()} ${this.test}`;
  }
}
