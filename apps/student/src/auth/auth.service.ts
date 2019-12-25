import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentsService } from '../students/students.service';
import { Student } from '../students/interfaces/student.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   *
   * @summary Validate credentials
   * @param email
   * @param password
   */
  async validate(email, password): Promise<Student> {
    const admin = await this.studentsService.findByEmail(email);
    if (admin && await admin.isValidPassword(password)) {
      return admin;
    }
    return null;
  }

  /**
   *
   * @summary Sign new jwt from admin info
   * @param user
   */
  async login(user: Student): Promise<any> {
    const payload = { sub: user._id };
    return {
      token: this.jwtService.sign(payload),
      email: user.email,
    };
  }
}
