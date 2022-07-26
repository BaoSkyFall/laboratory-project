import { ISpecialist } from '@/interfaces/ISpecialist';
import mongoose from 'mongoose';

const Specialist = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter specialist name'],
      index: true,
    },
    code: {
      type: String,
      required: [true, 'Please enter specialist code'],
      index: true,
    },

  },
  { timestamps: true },
);
export default mongoose.model<ISpecialist & mongoose.Document>('Specialist', Specialist);
