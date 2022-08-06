import { IUnitCompany } from '@/interfaces/IUnitCompany';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const UnitCompany = new mongoose.Schema(
  {

    name: {
      type: String,
      required: [true, 'Please enter Unit Company name'],
      index: true,
    },
    address: {
      type: String,
      required: [true, 'Please enter Unit Company Address'],
      index: true,
    },

  },
  {
    timestamps: true,
    collection: 'unitCompany'
  },
);
export default mongoose.model<IUnitCompany & mongoose.Document>('UnitCompany', UnitCompany);
