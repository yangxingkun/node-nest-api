import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class HdPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // console.log(
    //   value,
    //   metadata,
    //   metadata.metatype instanceof Number,
    //   typeof metadata.metatype,
    //   Object.prototype.toString.call(metadata.metatype)
    // );
    //自定义验证消息
    const object = plainToInstance(metadata.metatype, value);
    const errors = await validate(object);
    console.log('[ object ] >', object);
    console.log('[ errors ] >', errors);
    const messages = errors.map((error) => ({
      status: HttpStatus.BAD_REQUEST,
      name: error.property,
      message: Object.values(error.constraints).join(','),
    }));
    if (errors.length) {
      // throw new BadRequestException(messages);
      throw new HttpException(messages, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
