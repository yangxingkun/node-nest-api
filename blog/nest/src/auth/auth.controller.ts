import { Body, Controller, Post } from '@nestjs/common'
import registerDto from './dto/register.dto'
import { AuthService } from './auth.service'
import LoginDto from './dto/login.dto'
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() body: registerDto) {
    return this.authService.register(body)
  }
  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body)
  }
}
