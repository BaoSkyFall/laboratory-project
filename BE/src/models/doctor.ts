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
    levelCode: String,
    specialistCode: String,
    dob: Number,


  },
  { timestamps: true },
);
Doctor.virtual('specialistVirtual', {
  ref: 'specialist',
  localField: 'specialistCode',
  foreignField: 'code',
  justOne: true
});
export default mongoose.model<IDoctor & mongoose.Document>('Doctor', Doctor);
