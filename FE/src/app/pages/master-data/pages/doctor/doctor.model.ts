import { BaseSearch } from "@shared/models/base-search";


export class DoctorItem {
  _id?: string;
  name: string;
  email: string;
  levelDoctor: {
    _id: string;
    code: string;
    name: string;
  };
  specialist: {
    _id: string;
    code: string;
    name: string;
  };
  dob: number;
  phoneNumber: string;
  unitCompany: {
    _id: string;
    address: string;
    name: string;
  };
  gender: boolean;

}
