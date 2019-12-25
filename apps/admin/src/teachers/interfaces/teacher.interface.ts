import { Document } from 'mongoose';

export interface Teacher extends Document {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  department: string;
}
