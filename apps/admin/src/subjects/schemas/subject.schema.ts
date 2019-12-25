import { Schema } from 'mongoose';

const SubjectSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

export default SubjectSchema;
