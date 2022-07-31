export interface IDoctor {
  _id: string;
  name: string;
  email: string;
  levelCode: string;
  specialistId: string;
  phoneNumber: string;
  dob: number;
}

export interface IDoctorInputDTO {
  _id?: string;
  name: string;
  email: string;
  levelCode: string;
  specialistId: string;
  dob: number;
}
