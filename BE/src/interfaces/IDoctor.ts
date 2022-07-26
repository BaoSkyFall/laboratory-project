export interface IDoctor {
  _id: string;
  name: string;
  email: string;
  levelCode: string;
  specialistCode: string;
  phoneNumber: string;
  dob: number;
}

export interface IDoctorInputDTO {
  _id?: string;
  name: string;
  email: string;
  levelCode: string;
  specialistCode: string;
  dob: number;
}
