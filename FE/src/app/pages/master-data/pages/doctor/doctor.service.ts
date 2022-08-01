import { Injectable } from '@angular/core';
import { BUNDLE_API_URL, MASTER_API_URL } from '../../../../../../../../client-portal/src/app/inside/master-data/_enums';

@Injectable({
  providedIn: 'root'
})
export class MasterBundleService {

  constructor(private api: APIService) { }

  getDivisions() {
    return this.api.callApi(MASTER_API_URL.GET_USER_DIVISION, null);
  }

  getList(params: any) {
    return this.api.callApi(BUNDLE_API_URL.SEARCH, params);
  }

  getDetail(id: number) {
    return this.api.callApi({
      ...BUNDLE_API_URL.DETAIL,
      url: `${BUNDLE_API_URL.DETAIL.url}${id}`
    }, undefined);
  }

  delete(id: number) {
    return this.api.callApi({
      ...MASTER_API_URL.DELETE_PRODUCT_SET,
      url: `${MASTER_API_URL.DELETE_PRODUCT_SET.url}${id}`
    }, null);
  }

  saveBundleBasic(object: any) {
    return this.api.callApi(BUNDLE_API_URL.SAVE_BASIC, object);
  }

  updateBundleBasic(object: any) {
    return this.api.callApi(BUNDLE_API_URL.UPDATE_BASIC, object);
  }

  saveBundleDiscount(object: any) {
    return this.api.callApi(BUNDLE_API_URL.SAVE_DISCOUNT, object);
  }

  updateBundleDiscount(object: any) {
    return this.api.callApi(BUNDLE_API_URL.UPDATE_DISCOUNT, object);
  }

  getSoldTos(param: any) {
    return this.api.callApi(MASTER_API_URL.SEARCH_COMMON_SOLD, param);
  }

  getProductDivision() {
    return this.api.callApi(MASTER_API_URL.PRODUCT_DIVISION, undefined);
  }

  updateStatus(id: number, isActive: boolean = false) {
    let param = {
      "id": id,
      "isAction": isActive
    }
    return this.api.callApi(BUNDLE_API_URL.UPDATE_STATUS, param);
  }

}
