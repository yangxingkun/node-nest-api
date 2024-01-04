import { Inject, Injectable, Optional } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';
@Injectable()
export class ConfigService {
  // config = {} as any;
  constructor(
    @Optional() private config = {} as any,
    @Inject('CONFIG_OPTIONS') options: { path: string },
  ) {
    // const options = {
    //   path: path.resolve(__dirname, '../configure'),
    // };
    // console.log('config', config);
    readdirSync(options.path).map(async (file) => {
      console.log('file', file);
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(options.path, file));
        this.config = { ...this.config, ...module.default() };
        // console.log('this.config', this.config);
      }
    });
  }

  find(path: string) {
    return path.split('.').reduce((config, name) => {
      return config[name];
    }, this.config);
  }
}
