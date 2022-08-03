import { BaseSearch } from "@shared/models/base-search";


export class DoctorItem {
  _id?: string;
  name: string;
  email: string;
  levelDoctor: {
    code: string;
    name: string;
  };
  specialist: {
    code: string;
    name: string;
  };
  dob: number;
  phoneNumber: string;
  gender: boolean;

}
