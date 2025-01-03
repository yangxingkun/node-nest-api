import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: 'localhost',
  port: 8080,
}));
