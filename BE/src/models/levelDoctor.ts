import { ILevelDoctor } from '../interfaces/ILevelDoctor';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const LevelDoctor = new mongoose.Schema(
  {

    name: {
      type: String,
      required: [true, 'Please enter LevelDoctor name'],
      index: true,
    },
    code: {
      type: String,
      required: [true, 'Please enter LevelDoctor code'],
      index: true,
    },

  },
  {
    timestamps: true,
    collection: 'levelDoctor'
  },
);
export default mongoose.model<ILevelDoctor & mongoose.Document>('LevelDoctor', LevelDoctor);
