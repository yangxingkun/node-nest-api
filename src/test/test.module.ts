import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  providers: [
    TestService,
    {
      provide: 'test',
      useValue: 'test',
    },
  ],
  controllers: [TestController],
  exports: [TestService, 'test'],
})
export class TestModule {}
