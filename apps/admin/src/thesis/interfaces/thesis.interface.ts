import { Document } from 'mongoose';

export interface Thesis extends Document {
  name: string;
  description: string;
  student: string;
  teacher: string;
  subject: string;
  deadline: Date;
  attached: string;
  score: number;
}
