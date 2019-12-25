import { Schema } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';
import { Teacher } from '../interfaces/teacher.interface';

const TeacherSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  fullName: {
    type: String,
    required: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
  },
});

TeacherSchema.pre<Teacher>('save', async function(next) {
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

TeacherSchema.method('isValidPassword', async function(plainText) {
  return compare(plainText, this.password);
});

export default TeacherSchema;
