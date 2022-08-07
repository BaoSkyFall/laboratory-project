import { ISpecialist } from '../interfaces/ISpecialist';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

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
  {
    timestamps: true,
    collection: 'specialist'
  },
);
export default mongoose.model<ISpecialist & mongoose.Document>('Specialist', Specialist);
