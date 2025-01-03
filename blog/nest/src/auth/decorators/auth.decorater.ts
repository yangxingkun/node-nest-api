import { applyDecorators } from '@nestjs/common'
import { SetMetadata, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
// import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { Role } from '../enum'
import { RoleGuard } from '../guards/role.guard'
// type Role = 'admin' | 'user'

export function Auth(...roles: Role[]) {
  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt'), RoleGuard))
}
