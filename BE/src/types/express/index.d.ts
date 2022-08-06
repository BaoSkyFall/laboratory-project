import { Document, Model } from 'mongoose';
import { IUser } from '@/interfaces/IUser';
import { IDoctor } from '@/interfaces/IDoctor';
import { ISpecialist } from '@/interfaces/ISpecialist';
import { IUnitCompany } from '@/interfaces/IUnitCompany';


declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type DoctorModel = Model<IDoctor & Document>;
    export type SpecialistModel = Model<ISpecialist & Document>;
    export type UnitCompanyModel = Model<IUnitCompany & Document>;


  }
}
