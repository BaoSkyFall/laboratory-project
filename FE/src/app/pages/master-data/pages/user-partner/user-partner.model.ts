import { BaseSearch } from "@shared/models/base-search";

interface IUser {
  _id: string;
  name: string;
  email: string;
}


export class UserPartnerItem {
  _id?: string;
  ownerUser: IUser;
  partnerUser: IUser[];
  createdAt: string;
  expand: boolean;
}


