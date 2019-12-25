import { Document } from 'mongoose';

export interface Student extends Document {
  code: string;
  email: string;
  password: string;
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
  sector: string;
  isValidPassword(plainTex: string): Promise<boolean>;
}
