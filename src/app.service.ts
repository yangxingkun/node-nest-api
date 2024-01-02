import { Injectable } from '@nestjs/common';
// import { HdService } from './hd.service';

@Injectable()
export class AppService {
  constructor() {}
  // fineOne() {
  //   return this.hd.hd();
  // }
  find() {
    return `hello world`;
  }
}
