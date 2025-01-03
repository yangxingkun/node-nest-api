import { PrismaClient } from '@prisma/client';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsNotExistsRule(
  table: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNotExistsRule',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          if (!value) return true;
          const prisma = new PrismaClient();
          const res = await prisma[table].findFirst({
            where: {
              [args.property]: value,
            },
          });
          return !Boolean(res);
        },
      },
    });
  };
}
