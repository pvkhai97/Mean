import { Schema } from 'mongoose';

const DepartmentSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
});

export default DepartmentSchema;
