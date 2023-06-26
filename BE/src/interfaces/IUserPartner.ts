export interface IUserPartner {
  _id?: string;
  name?: string;
  email?: string;
}

export interface IUserPartnerInputDTO {
  _id?: string;
  ownerUser?: string;
  partnerUser?: string[];
}
