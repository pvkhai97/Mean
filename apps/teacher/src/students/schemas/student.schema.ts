import { Schema } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';
import { Student } from '../interfaces/student.interface';

const StudentSchema = new Schema({
  code: {
    type: String,
  },
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
  dateOfBirth: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  sector: {
    type: Schema.Types.ObjectId,
    ref: 'Sector',
  },
});

StudentSchema.pre<Student>('save', async function(next) {
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

StudentSchema.method('isValidPassword', async function(plainText) {
  return compare(plainText, this.password);
});

export default StudentSchema;
