import { Schema } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';
import { Admin } from '../interfaces/admin.interface';

export const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

AdminSchema.pre<Admin>('save', async function(next) {
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

AdminSchema.method('isValidPassword', async function(plainText) {
  return compare(plainText, this.password);
});
