import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '@constants/api.constants';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SelectTransportCenterService {

  constructor(private http: HttpClient) { }

  getAllTransportCenter() {
    return this.http.get(API.URL.TRACK_TRACE.GET_ALL).pipe(take(1));
  }

  getAllReportByTransportCode(code: string) {
    return this.http.post(`${API.URL.R_SETTING.GET_BY_TRANSPORT_CODE}?tramocCode=${code}`, null).pipe(take(1));
  }

}
