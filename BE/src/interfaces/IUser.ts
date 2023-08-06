export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  fullName?: string;
  password?: string;
  salt?: string;
  role?: string;
}

export interface IUserInputDTO {
  name?: string;
  email?: string;
  fullName?: string;
  password?: string;
  role?: string;
}
