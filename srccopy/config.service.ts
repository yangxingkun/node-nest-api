import { config } from 'dotenv';
import { devConfig } from './config/dev.config';
import { prodConfig } from './config/prod.config';
import { join } from 'path';
config({
  path: join(__dirname, '../.env'),
});

export const ConfigService = {
  provide: 'ConfigService',
  useValue: process.env.NODE_ENV == 'dev' ? devConfig : prodConfig,
};
