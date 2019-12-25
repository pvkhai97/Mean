import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TeachersService } from '../teachers/teachers.service';
import { Teacher } from '../teachers/interfaces/teacher.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly teachersService: TeachersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   *
   * @summary Validate credentials
   * @param email
   * @param password
   */
  async validate(email, password): Promise<Teacher> {
    const user = await this.teachersService.findByEmail(email);
    if (user && await user.isValidPassword(password)) {
      return user;
    }
    return null;
  }

  /**
   *
   * @summary Sign new jwt from admin info
   * @param user
   */
  async login(user: Teacher): Promise<any> {
    const payload = { sub: user._id };
    return {
      token: this.jwtService.sign(payload),
      email: user.email,
    };
  }
}
