import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config.service';

// import { DevService } from './dev.service';
// import { HdService } from './hd.service';
// import { config } from 'dotenv';
// import { join } from 'path';
import { DbService } from './db.service';
import { QdModule } from './qd/qd.module';
import { TestModule } from './test/test.module';
// config({
//   path: join(__dirname, '../.env'),
// });
// const SwichService = {
//   provide: 'SwichService',
//   useClass: process.env.NODE_ENV == 'dev' ? DevService : HdService,
// };

@Module({
  imports: [QdModule, TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    // SwichService,
    {
      provide: 'appName',
      useValue: {
        name: '后盾人',
        author: '湘军大叔',
      },
    },
    // DbService,
    // DevService,
    {
      provide: 'DbService',
      inject: ['ConfigService'],
      useFactory(ConfigService) {
        return new DbService(ConfigService);
      },
    },
  ],
})
export class AppModule {}
