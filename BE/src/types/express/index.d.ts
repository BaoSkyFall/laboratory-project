import { Document, Model } from 'mongoose';
import { IUser } from '@/interfaces/IUser';
import { IDoctor } from '@/interfaces/IDoctor';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type DoctorModel = Model<IDoctor & Document>;

  }
}
