import { BaseSearch } from "@shared/models/base-search";

export class BlackListSearchModel extends BaseSearch {
  public scheduleTime?: Date;
  public statusList?: string[]
}

export class BackListCardModel {
  public cardNo: string;
  public reason: string;
  public status: string;
  public id?: number;
  public isNew?: boolean;
  public updatedDate: string;
  public createdDate: string;
  public name: string;
  public idCard: string;
  public monthCardId: number;
}
export class PermissionSearchResult {
  public id: number;
  public email: string;
  public name: string;
  public avatar: string;
  public phone: string;
}
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
