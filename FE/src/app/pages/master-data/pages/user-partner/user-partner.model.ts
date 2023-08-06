import { BaseSearch } from "@shared/models/base-search";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  fullName?: string;
  role: string;
  checked?: boolean;
  isExisted?: boolean;
}


export class UserPartnerItem {
  _id?: string;
  ownerUser: IUser;
  partnerUser: IUser[];
  createdAt: string;
  expand: boolean;
}


