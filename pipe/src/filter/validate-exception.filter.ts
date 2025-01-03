import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class ValidateExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    if (exception instanceof BadRequestException) {
      const responseObject = exception.getResponse() as any;
      return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: responseObject.message.map((item) => {
          const info = item.split(':');
          return { field: info[0], message: info[1] };
        }),
      });
    }
    console.log('[ response ] >', response);
    return response;
  }
}
