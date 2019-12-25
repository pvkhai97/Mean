import { Document } from 'mongoose';

export interface Sector extends Document {
  name: string;
  department: string;
  subject: string[];
}
