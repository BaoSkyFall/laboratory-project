import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '@constants/api.constants';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPartnerService {
  constructor(private http: HttpClient) { }

  getUserPartnerList(payload: any) {
    return this.http.post(API.URL.USER_PARTNER.LIST, payload).pipe(take(1));
  }
  getUserFlattenList(payload: any) {
    return this.http.post(API.URL.USER_PARTNER.FLATTEN, payload).pipe(take(1));

  }
  getCategoryList(payload: any) {
    return this.http.post(API.URL.CATEGORY.LIST, payload).pipe(take(1));
  }
  createUserPartnerList(payload: any) {
    return this.http.post(API.URL.USER_PARTNER.CREATE, payload).pipe(take(1));
  }
  editUserPartnerList(payload: any) {
    return this.http.post(API.URL.USER_PARTNER.EDIT, payload).pipe(take(1));
  }
  deleteUserPartnerList(payload: any) {
    return this.http.post(API.URL.USER_PARTNER.DELETE, { _id: payload?._id }).pipe(take(1));
  }


  // getBlackList(searchModel: BlackListSearchModel) {
  //   return this.http.post(API.URL.BLACK_LIST.SEARCH, searchModel).pipe(take(1));
  // }
  // searchEmployee(searchModel: BlackListSearchModel) {
  //   return this.http.post(API.URL.MONTH_CARD.SEARCH, searchModel).pipe(take(1));
  // }
  // deleteItemOnBlackList(id: number) {
  //   return this.http.delete(API.URL.BLACK_LIST.DELETE + id).pipe(take(1));
  // }

  // insertNewBlackList(blackList: BackListCardModel) {
  //   return this.http.post(API.URL.BLACK_LIST.INSERT, blackList).pipe(take(1));
  // }

  // updateBlackList(blackList: BackListCardModel) {
  //   return this.http.put(API.URL.BLACK_LIST.UPDATE, blackList).pipe(take(1));
  // }

  // getBlackListHistory(cardNo: string) {
  //   return this.http.get(`${API.URL.BLACK_LIST.BLACK_LIST_HISTORIES}?cardNo=${cardNo}`).pipe(take(1));
  // }

}
