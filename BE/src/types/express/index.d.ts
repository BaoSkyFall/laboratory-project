import { ILevelDoctor } from '../interfaces/ILevelDoctor';
import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { IDoctor } from '../../interfaces/IDoctor';
import { ISpecialist } from '../../interfaces/ISpecialist';
import { IUnitCompany } from '../../interfaces/IUnitCompany';
import { IUserPartner } from '../../interfaces/IUserPartner';

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type UserPartnerModel = Model<IUserPartner & Document>;
    export type DoctorModel = Model<IDoctor & Document>;
    export type LevelDoctorModel = Model<ILevelDoctor & Document>;
    export type SpecialistModel = Model<ISpecialist & Document>;
    export type UnitCompanyModel = Model<IUnitCompany & Document>;
    export type CriteriaModel = Model<ICriteria & Document>;
    export type CriteriaSetModel = Model<ICriteriaSet & Document>;
    export type CategoryModel = Model<ICategory & Document>;

  }
}
