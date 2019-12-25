import { Schema } from 'mongoose';

const ThesisSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
  },
  semester: {
    type: Schema.Types.ObjectId,
    ref: 'Semester',
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
  },
  deadline: {
    type: Date,
  },
  attached: {
    type: String,
  },
  score: {
    type: Number,
  },
});

export default ThesisSchema;
