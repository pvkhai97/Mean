import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './strategies/jwt-stategy.service';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { TeachersModule } from '../teachers/teachers.module';

@Module({
  imports: [
    TeachersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [AuthService, JwtStrategyService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
