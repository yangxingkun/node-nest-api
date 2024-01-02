import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ConfigService {
  config = {} as any;

  constructor() {
    const config = {
      path: path.resolve(__dirname, '../configure'),
    };
    console.log('config', config);
    readdirSync(config.path).map(async (file) => {
      console.log('file', file);
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(config.path, file));
        // console.log('[ module ] >', module.default());
        this.config = { ...this.config, ...module.default() };
        console.log('this.config', this.config);
      }
    });
  }

  find() {
    return `${this.config.database.host}`;
  }
}
