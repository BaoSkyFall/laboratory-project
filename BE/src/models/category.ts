import { ICategory } from '../interfaces/ICategory';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const Category = new mongoose.Schema(
  {

    name: {
      type: String,
      required: [true, 'Please enter category name'],
      index: true,
    },
    code: {
      type: String,
      required: [true, 'Please enter category code'],
      index: true,
    },

  },
  {
    timestamps: true,
    collection: 'category'
  },
);
export default mongoose.model<ICategory & mongoose.Document>('Category', Category);
