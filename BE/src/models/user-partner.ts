import { IUserPartner } from '../interfaces/IUserPartner';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const UserPartner = new mongoose.Schema(
  {

    ownerUser: {
      type: String,
      required: [true, 'Please enter owner user'],
      index: true,
      ref: 'User'
    },
    partnerUser: [{
      type: String,
      ref: 'User'
    }]
  },
  {
    timestamps: true,
    collection: 'userPartner'
  },
);
export default mongoose.model<IUserPartner & mongoose.Document>('UserPartner', UserPartner);
