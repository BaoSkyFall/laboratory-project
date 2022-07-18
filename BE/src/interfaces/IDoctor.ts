export interface IDoctor {
  _id: string;
  name: string;
  email: string;
  level: string;
  apartment: string;
  phoneNumber: string;
  dob: number;
}

export interface IDoctorInputDTO {
  name: string;
  email: string;
  level: string;
  apartment: string;
  dob: number;
}
