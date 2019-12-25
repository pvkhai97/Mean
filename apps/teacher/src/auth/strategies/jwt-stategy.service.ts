import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { TeachersService } from '../../teachers/teachers.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  constructor(private readonly teachersService: TeachersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
      ignoreExpiration: true,
    });
  }

  /**
   *
   * @summary validate payload
   * @param payload
   * @param done
   */
  async validate(payload: any, done: VerifiedCallback): Promise<any> {
    // Get user by id in the payload
    const user = await this.teachersService.findById(payload.sub);
    // check if exist user
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  }
}
