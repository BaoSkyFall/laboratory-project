import { ICriteriaSet } from '../interfaces/ICriteriaSet';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const CriteriaSet = new mongoose.Schema(
  {

    name: {
      type: String,
      required: [true, 'Please enter criteria name'],
      index: true,
    },
    criteriaList: [{
      type: String,
      ref: 'Criteria'
    }]
  },
  {
    timestamps: true,
    collection: 'criteriaSet'
  },
);
export default mongoose.model<ICriteriaSet & mongoose.Document>('CriteriaSet', CriteriaSet);
