import { Injectable } from '@nestjs/common';

@Injectable()
export class DevService {
  get() {
    return 'dev湘军大叔～';
  }
}
