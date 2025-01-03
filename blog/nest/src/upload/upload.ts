import { applyDecorators, UnsupportedMediaTypeException, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'

// 文件类型过滤函数
export function filterFilter(type: string) {
  return (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
    if (!file.mimetype.includes(type)) {
      callback(new UnsupportedMediaTypeException('文件类型错误'), false)
    } else {
      callback(null, true)
    }
  }
}

// 文件上传装饰器
export function Upload(field = 'file', options: MulterOptions) {
  return applyDecorators(UseInterceptors(FileInterceptor(field, options)))
}

// 图片上传装饰器
export function UploadImage(field = 'file') {
  return Upload(field, {
    limits: Math.pow(1024, 2) * 2,
    fileFilter: filterFilter('image'),
  } as MulterOptions)
}
export function UploadDocument(field = 'file') {
  return Upload(field, {
    limits: Math.pow(1024, 2) * 5,
    fileFilter: filterFilter('doucument'),
  } as MulterOptions)
}
