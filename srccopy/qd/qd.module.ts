import { Module } from '@nestjs/common';
import { QdService } from './qd.service';
import { QdController } from './qd.controller';
import { TestModule } from '../test/test.module';
@Module({
  imports: [TestModule],
  providers: [QdService],
  controllers: [QdController],
})
export class QdModule {}
