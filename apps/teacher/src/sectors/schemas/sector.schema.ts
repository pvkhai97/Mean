import { Schema } from 'mongoose';

const SectorSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
  },
});

export default SectorSchema;
