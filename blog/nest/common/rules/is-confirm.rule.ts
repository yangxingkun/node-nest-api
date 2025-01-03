import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

// 验证字段是否相等
export function IsConfirm(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsConfirm',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          if (!value) return true;
          return Boolean(value == args.object[`${args.property}_confirm`]);
        },
      },
    });
  };
}
