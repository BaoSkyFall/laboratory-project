import { IDoctor } from '@/interfaces/IDoctor';
import mongoose from 'mongoose';

const Doctor = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },

    phoneNumber: String,
    level: String,
    apartment: String,
    dob: Number,


  },
  { timestamps: true },
);

export default mongoose.model<IDoctor & mongoose.Document>('Doctor', Doctor);
