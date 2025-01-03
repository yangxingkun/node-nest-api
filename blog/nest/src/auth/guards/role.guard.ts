import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Role } from '../enum'
import { user } from '@prisma/client'
import { Reflector } from '@nestjs/core'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log('角色守卫启动')
    const role = (context.switchToHttp().getRequest().user as user).roles
    const roles = this.reflector.get<Role>('roles', context.getHandler())
    console.log('[ user ] >', role, roles)
    return roles.length ? roles.includes(role) : true
  }
}
