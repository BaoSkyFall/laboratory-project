import { ICriteria } from '../interfaces/ICriteria';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const Criteria = new mongoose.Schema(
  {

    name: {
      type: String,
      required: [true, 'Please enter criteria name'],
      index: true,
    },
    category: {
      type: String,
      required: [true, 'Please enter criteria code'],
      ref: 'Category'
    },
    priceMaster: Number,
    sortOrder: Number

  },
  {
    timestamps: true,
    collection: 'criteria'
  },
);
export default mongoose.model<ICriteria & mongoose.Document>('Criteria', Criteria);
