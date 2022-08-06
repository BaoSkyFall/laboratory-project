import { IDoctor } from '@/interfaces/IDoctor';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

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
    levelDoctor: {
      type: String,
      ref: 'LevelDoctor'
    },
    specialist: {
      type: String,
      ref: 'Specialist'
    },
    unitCompany: {
      type: String,
      ref: 'UnitCompany'
    },
    gender: Boolean,
    dob: Number,


  },
  {
    timestamps: true,
    collection: 'doctors'
  },
);

export default mongoose.model<IDoctor & mongoose.Document>('Doctor', Doctor);
