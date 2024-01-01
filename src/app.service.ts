import { Inject, Injectable } from '@nestjs/common';
// import { HdService } from './hd.service';

@Injectable()
export class AppService {
  constructor(
    // private readonly hd: HdService,
    @Inject('appName') private appName: any,
    // @Inject('SwichService') private config: any,
  ) {}
  // fineOne() {
  //   return this.hd.hd();
  // }
  getHello() {
    return `hello world ${this.appName.name}`;
  }
  // find() {
  //   return this.config.get();
  // }
}
