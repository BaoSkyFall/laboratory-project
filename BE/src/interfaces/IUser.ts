export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  fullName?: string;
  password?: string;
  salt?: string;
}

export interface IUserInputDTO {
  name?: string;
  email?: string;
  fullName?: string;
  password?: string;
}
