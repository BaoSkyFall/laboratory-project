import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '@constants/api.constants';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { BackListCardModel, BlackListSearchModel } from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class BlackListService {
  // isEdit: boolean = false;

  // public $$isBlackListDrawerVisible = new BehaviorSubject<boolean>(false);
  // $isBlackListDrawerVisible = this.$$isBlackListDrawerVisible.asObservable();

  constructor(private http: HttpClient) { }

  getBlackList(searchModel: BlackListSearchModel) {
    return this.http.post(API.URL.BLACK_LIST.SEARCH, searchModel).pipe(take(1));
  }
  searchEmployee(searchModel: BlackListSearchModel) {
    return this.http.post(API.URL.MONTH_CARD.SEARCH, searchModel).pipe(take(1));
  }
  deleteItemOnBlackList(id: number) {
    return this.http.delete(API.URL.BLACK_LIST.DELETE + id).pipe(take(1));
  }

  insertNewBlackList(blackList: BackListCardModel) {
    return this.http.post(API.URL.BLACK_LIST.INSERT, blackList).pipe(take(1));
  }

  updateBlackList(blackList: BackListCardModel) {
    return this.http.put(API.URL.BLACK_LIST.UPDATE, blackList).pipe(take(1));
  }

  getBlackListHistory(cardNo: string) {
    return this.http.get(`${API.URL.BLACK_LIST.BLACK_LIST_HISTORIES}?cardNo=${cardNo}`).pipe(take(1));
  }

}
