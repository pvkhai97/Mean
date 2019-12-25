import { Injectable } from '@nestjs/common';
import { AdminsService } from '../admins/admins.service';
import { JwtService } from '@nestjs/jwt';
import { Admin } from '../admins/interfaces/admin.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   *
   * @summary Validate credentials
   * @param email
   * @param password
   */
  async validate(email, password): Promise<Admin> {
    const admin = await this.adminsService.findByEmail(email);
    if (admin && await admin.isValidPassword(password)) {
      return admin;
    }
    return null;
  }

  /**
   *
   * @summary Sign new jwt from admin info
   * @param admin
   */
  async login(admin: Admin): Promise<any> {
    const payload = { sub: admin._id };
    return {
      token: this.jwtService.sign(payload),
      email: admin.email,
    };
  }
}
