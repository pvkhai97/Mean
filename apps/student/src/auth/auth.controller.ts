import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiUseTags('auth')
export class AuthController {
  /**
   *
   * @constructor
   * @param authService
   */
  constructor(private readonly authService: AuthService) {}

  /**
   *
   * @param loginDto - The login data transfer object
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<any> {
    const user = await this.authService.validate(
      loginDto.email,
      loginDto.password,
    );
    if (user) {
      return this.authService.login(user);
    }
    throw new BadRequestException('Invalid credentials');
  }

  @Post('change-password')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async changePassword(
    @Request() request: any,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    const user = await this.authService.validate(
      request.user.email,
      changePasswordDto.password,
    );
    if (user) {
      user.password = changePasswordDto.newPassword;
      await user.save();
      return user;
    }
    throw new BadRequestException('Invalid password');
  }
}
