import { environment } from '../../../environments/environment';

const version = 1;
const versionNew = 1.1; //Fix template by boss Son's requirement
export const API = {
  URL: {
    AUTHENTICATE: {
      AUTHENTICATE: `${environment.API_URL}/api/v` + version + `/authentication/authenticate`,
      REFRESH_TOKEN: `${environment.API_URL}/api/v` + version + `/authentication/refresh-token`
    },
    DOCTOR: {
      LIST: `${environment.API_URL}/api/doctor/list`,
      CREATE: `${environment.API_URL}/api/doctor/create`,
      EDIT: `${environment.API_URL}/api/doctor/edit`,
      DELETE: `${environment.API_URL}/api/doctor/delete`,

    },
    LEVEL_DOCTOR: {
      LIST: `${environment.API_URL}/api/levelDoctor/list`,
      CREATE: `${environment.API_URL}/api/levelDoctor/create`,
      EDIT: `${environment.API_URL}/api/levelDoctor/edit`,
      DELETE: `${environment.API_URL}/api/levelDoctor/delete`,

    },
    SPECIALIST: {
      LIST: `${environment.API_URL}/api/specialist/list`,
      CREATE: `${environment.API_URL}/api/specialist/create`,
      EDIT: `${environment.API_URL}/api/specialist/edit`,
      DELETE: `${environment.API_URL}/api/specialist/delete`,

    },
    UNIT_COMPANY: {
      LIST: `${environment.API_URL}/api/unitCompany/list`,
      CREATE: `${environment.API_URL}/api/unitCompany/create`,
      EDIT: `${environment.API_URL}/api/unitCompany/edit`,
      DELETE: `${environment.API_URL}/api/unitCompany/delete`,

    },
    CRITERIA: {
      LIST: `${environment.API_URL}/api/criteria/list`,
      CREATE: `${environment.API_URL}/api/criteria/create`,
      EDIT: `${environment.API_URL}/api/criteria/edit`,
      DELETE: `${environment.API_URL}/api/criteria/delete`,

    },
    CATEGORY: {
      LIST: `${environment.API_URL}/api/category/list`,
      CREATE: `${environment.API_URL}/api/category/create`,
      EDIT: `${environment.API_URL}/api/category/edit`,
      DELETE: `${environment.API_URL}/api/category/delete`,

    },
    CRITERIA_SET: {
      LIST: `${environment.API_URL}/api/criteriaSet/list`,
      CREATE: `${environment.API_URL}/api/criteriaSet/create`,
      EDIT: `${environment.API_URL}/api/criteriaSet/edit`,
      DELETE: `${environment.API_URL}/api/criteriaSet/delete`,

    },
    USER_PARTNER: {
      LIST: `${environment.API_URL}/api/userPartner/list`,
      FLATTEN: `${environment.API_URL}/api/userPartner/list-user-flatten`,
      CREATE: `${environment.API_URL}/api/userPartner/create`,
      EDIT: `${environment.API_URL}/api/userPartner/edit`,
      DELETE: `${environment.API_URL}/api/userPartner/delete`,
      CREATE_USER: `${environment.API_URL}/api/userPartner/create-user`,
    },
    // ACCOUNTS: {
    //   GET_ACCOUNT_INFO: `${environment.API_URL}/api/v` + version + `/account/get-account-info`,
    //   GET_ACCOUNT_BY_ID_FOR_SA: `${environment.API_URL}/core/v` + version + `/Account/get-account-for-management/`,
    //   UPDATE_USER: `${environment.API_URL}/core/v` + version + `/Account/update`,
    //   UPDATE: `${environment.API_URL}/api/v` + version + `/account/update/`,
    //   FORGOT_PASSWORD: `${environment.API_URL}/api/v` + version + `/account/forgot-password/`,
    //   SALE_MAN: `${environment.API_URL}/afc/v` + version + `/account/sale-man`,
    // },
    // BUSINESS_SETTING: {
    //   GET_ALL: `${environment.API_URL}/afc/v` + version + `/businesssetting/getall`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/businesssetting/update`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/businesssetting/insert`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/businesssetting/delete/`,
    //   GET_BY_TYPE: `${environment.API_URL}/afc/v` + version + `/businesssetting/getbytype`
    // },
    // BLACK_LIST: {
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/blacklistcard/search`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/blacklistcard/delete/`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/blacklistcard/insert`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/blacklistcard/update`,
    //   BLACK_LIST_HISTORIES: `${environment.API_URL}/afc/v` + version + `/blacklistcard/histories`
    // },
    // USER: {
    //   ACCOUNT_INFO: `${environment.API_URL}/api/v` + version + `/account/account-info`,
    //   ACCOUNT_UPLOAD_AVATAR: `${environment.API_URL}/api/v` + version + `/account/upload-avatar`,
    //   CHANGE_PASSWORD: `${environment.API_URL}/api/v` + version + `/Account/change-password`,
    //   UPDATE_ACCOUNT_INFO: `${environment.API_URL}/api/v` + version + `/Account/update-profile`,
    //   MENU_ACCESS: `${environment.API_URL}/api/v` + version + `/account/access-menu-permission`,
    // },
    // USER_AFC: {
    //   GET_ALL: `${environment.API_URL}/afc/v` + version + `/account/getall`,
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/account/search`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/account/update`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/account/insert`,
    //   GET_BY_ID: `${environment.API_URL}/afc/v` + version + `/account/getbyid/`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/account/delete/`,
    //   RESET_PASSWORD: `${environment.API_URL}/afc/v` + version + `/account/reset-password/`,
    //   DOWNLOAD_TEMPLATE: `${environment.API_URL}/afc/v` + version + `/account/account-template`,
    //   IMPORT_EXCEL: `${environment.API_URL}/afc/v` + version + `/account/import-account`,

    // },
    // COMPANY: {
    //   GET_ALL: `${environment.API_URL}/afc/v` + version + `/company/getall`,
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/company/search`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/company/update`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/company/insert`,
    //   GET_BY_ID: `${environment.API_URL}/afc/v` + version + `/company/getbyid`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/company/delete/`,
    //   UPLOAD_LOGO: `${environment.API_URL}/afc/v` + version + `/company/upload-logo`,
    //   UPLOAD_MINI_LOGO: `${environment.API_URL}/afc/v` + version + `/company/upload-mini-logo`
    // },
    // SETTINGS: {
    //   SEARCH: `${environment.API_URL}/api/v` + version + `/systemsetting/search`,
    //   GET_ALL: `${environment.API_URL}/api/v` + version + `/systemsetting/getall`,
    //   UPDATE: `${environment.API_URL}/api/v` + version + `/systemsetting/update`,
    //   ADD_NEW: `${environment.API_URL}/api/v` + version + `/systemsetting/insert`
    // },
    // GROUP: {
    //   GET_ALL: `${environment.API_URL}/core/v` + version + `/Group/getall`,
    //   ADD_GROUP: `${environment.API_URL}/core/v` + version + `/Group/insert`,
    //   UPDATE: `${environment.API_URL}/core/v` + version + `/Group/update`,
    // },
    // FUNCTION_GROUP: {
    //   GET_FUNCTIONS: `${environment.API_URL}/core/v` + version + `/FunctionGroup/getFunctions`,
    //   UPDATE_FUNCTIONS: `${environment.API_URL}/core/v` + version + `/FunctionGroup/gen-group-permisson`,
    //   UPDATE: `${environment.API_URL}/core/v` + version + `/FunctionGroup/gen-group-permisson`,
    //   GET_PERMISSIONS: `${environment.API_URL}/core/v` + version + `/FunctionGroup/AccessMenu`,
    // },
    // FILE: {
    //   FACE_UPLOAD: `${environment.API_URL}/api/v` + version + `/File/facecapture/upload`,
    //   AVATAR: `${environment.API_URL}/api/v` + version + `/File/upload`,
    //   UploadMultiFiles: `${environment.API_URL}/api/v` + version + `/File/UploadListFile`,
    //   UPLOAD_SINGBG: `${environment.API_URL}/api/v` + version + `/File/UploadBg`,
    //   UPLOAD_COMP_LOGO: `${environment.API_URL}/api/v` + version + `/File/logo/upload`,
    //   UPLOAD_AVATAR: `${environment.API_URL}/api/v` + version + `/account/upload-avatar`,
    // },
    // FEATURE_FUNCTION: {
    //   GET_BY_FEATURE_ID: `${environment.API_URL}/core/v` + version + `/FeatureFunction/GetFeatureId`,
    //   UPDATE: `${environment.API_URL}/core/v` + version + `/FeatureFunction/Insert`,
    // },
    // POS_MACHINE: {
    //   GET_BY_ID: `${environment.API_URL}/afc/v` + version + `/mposmachine/getbyid`,
    //   GET_ALL: `${environment.API_URL}/afc/v` + version + `/mposmachine/getall`,
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/mposmachine/search`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/mposmachine/insert`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/mposmachine/update`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/mposmachine/delete/`,
    //   GET_DEVICE_HISTORY: `${environment.API_URL}/afc/v` + version + `/mposmachine/device-history`,
    //   GET_GPS_TRACKING: `${environment.API_URL}/afc/v` + version + `/mposmachine/gps-tracking`
    // },
    // PERMISSION: {
    //   GET_BY_ID_FN_GROUP: `${environment.API_URL}/core/v` + version + `/FunctionGroup/apiGetFunctions/`,
    //   GET_FN_GROUP_BY_COMPANY_ID: `${environment.API_URL}/api/v` + version + `/Permission/get-function-group-by-companyId`,
    //   SEARCH_EMPLOYEE: `${environment.API_URL}/api/v` + version + `/Permission/search-employee`,
    //   GET_MEMBERS_BY_PERMISSION_ID: `${environment.API_URL}/api/v` + version + `/Permission/get-member-by-permission-id/`,
    //   INSERT_MEMBER_PERMISSION: `${environment.API_URL}/api/v` + version + `/Permission/insert-member-permission`,
    //   DELETE_MEMBER_PERMISSION: `${environment.API_URL}/api/v` + version + `/permission/delete-member-permission`,
    // },
    // APP_VERSION: {
    //   GET_ALL: `${environment.API_URL}/afc/v` + version + `/posappversion/GetAll`,
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/posappversion/Search`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/posappversion/insert`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/posappversion/Update`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/posappversion/delete`,
    //   UPLOAD_APK: `${environment.API_URL}/afc/v` + version + `/posappversion/upload-file`,
    //   GET_MODEL: `${environment.API_URL}/afc/v` + version + `/posappversion/business-setting`,
    //   GET_TYPE_STATUS: `${environment.API_URL}/afc/v` + version + `/posappversion/business-setting`,

    // },
    // TRACK_TRACE: {
    //   GET_ALL: `${environment.API_URL}/afc/v` + version + `/mtramoc/GetAll`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/mtramoc/Update`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/mtramoc/Insert`,
    //   UPLOAD_LOGO: `${environment.API_URL}/afc/v` + version + `/mtramoc/upload-logo`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/mtramoc/delete/`,
    // },
    // JOBS: {
    //   GET_ALL: `${environment.API_URL}/core/v` + version + `/job/getall`,
    //   SEARCH: `${environment.API_URL}/core/v` + version + `/job/search`,
    //   UPDATE: `${environment.API_URL}/core/v` + version + `/job/update_cron`,
    //   INSERT: `${environment.API_URL}/core/v` + version + `/job/insert`,
    //   GET_BY_ID: `${environment.API_URL}/core/v` + version + `/job/getbyid`,
    //   DELETE: `${environment.API_URL}/core/v` + version + `/job/delete/`,
    //   START: `${environment.API_URL}/core/v` + version + `/job/start/`,
    //   PAUSE: `${environment.API_URL}/core/v` + version + `/job/pause/`,
    // },
    // M_ROUTE: {
    //   GEL_ALL: `${environment.API_URL}/pos/v` + version + `/mroute/getall`
    // },
    // ROUTE: {
    //   GEL_ALL: `${environment.API_URL}/afc/v` + version + `/route/getall`,
    //   GET_ALL_FOR_REPORT: `${environment.API_URL}/afc/v` + version + `/report/GetAllRoute`,
    //   GET_SHIFT_SCHEDULER: `${environment.API_URL}/afc/v` + version + `/route/shift-scheduler`,
    //   ROUTE_SEARCH: `${environment.API_URL}/afc/v` + version + `/route/search`,
    //   GET_ROUTE_BY_ID: `${environment.API_URL}/afc/v` + version + `/route/getbyid`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/route/insert`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/route/update`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/route/delete/`,
    //   INSERT_BUS_STATION: `${environment.API_URL}/afc/v` + version + `/mbusstop/insert`,
    //   UPDATE_BUS_STATION: `${environment.API_URL}/afc/v` + version + `/mbusstop/update`,
    //   DELETE_BUS_STATION: `${environment.API_URL}/afc/v` + version + `/mbusstop/delete/`,

    // },
    // SHIFT_SCHEDULER: {
    //   DOWNLOAD_TEMPLATE: `${environment.API_URL}/afc/v` + version + `/shiftscheduler/shift-scheduler-template`,
    //   IMPORT_EXCEL: `${environment.API_URL}/afc/v` + version + `/shiftscheduler/import-shift-scheduler`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/route/update-shift-scheduler`,
    //   CLONE: `${environment.API_URL}/afc/v` + version + `/route/clone-shift-scheduler`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/route/delete/`,
    // },
    // PRODUCT_TICKET: {
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/mticketproductcontrollerv2/search`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/mticketproductcontrollerv2/update`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/mticketproductcontrollerv2/insert`,
    //   GET_BY_ID: `${environment.API_URL}/afc/v` + version + `/mticketproductcontrollerv2/getbyid`,
    //   UPDATE_STATUS: `${environment.API_URL}/afc/v` + version + `/mticketproductcontrollerv2/updatestatus`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/mticketproductcontrollerv2/delete/`,
    // },
    // PRODUCT_PRICE: {
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/mproductprice/search`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/mproductprice/update`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/mproductprice/insert`,
    //   GET_BY_ID: `${environment.API_URL}/afc/v` + version + `/mproductprice/getbyid`,
    //   UPDATE_STATUS: `${environment.API_URL}/afc/v` + version + `/mproductprice/updatestatus?id=`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/mproductprice/delete/`,
    // },
    // M_BUS: {
    //   GET_ALL: `${environment.API_URL}/afc/v` + version + `/mbus/getAll`,
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/mbus/search`,
    //   GET_BY_ID: `${environment.API_URL}/afc/v` + version + `/mbus/getbyid`,
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/mbus/insert`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/mbus/update`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/mbus/delete/`,
    //   DOWNLOAD_TEMPLATE: `${environment.API_URL}/afc/v` + version + `/mbus/bus-template`,
    //   IMPORT_EXCEL: `${environment.API_URL}/afc/v` + version + `/mbus/import-bus`,


    // },
    // MONTH_CARD: {
    //   INSERT: `${environment.API_URL}/afc/v` + version + `/monthcard/insert`,
    //   UPDATE_REQUEST: `${environment.API_URL}/afc/v` + version + `/monthcard/updaterequest`,
    //   UPDATE: `${environment.API_URL}/afc/v` + version + `/monthcard/update`,
    //   OBJECT_CARD: `${environment.API_URL}/afc/v` + version + `/monthcard/object-card`,
    //   DELETE: `${environment.API_URL}/afc/v` + version + `/monthcard/delete/`,
    //   DELETE_CARD_REQUEST: `${environment.API_URL}/afc/v` + version + `/monthcard/deleterequest/`,
    //   ISSUE_TYPE: `${environment.API_URL}/afc/v` + version + `/monthcard/issue-type`,
    //   STATUS_TYPE: `${environment.API_URL}/afc/v` + version + `/monthcard/status-type`,
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/monthcard/search`,
    //   GET_CARD_BY_ID: `${environment.API_URL}/afc/v` + version + `/monthcard/getbyid`,
    //   UPLOAD_CARD_fILE: `${environment.API_URL}/afc/v` + version + `/monthcard/upload-card-file`,
    //   CHANGE_STATUS: `${environment.API_URL}/afc/v` + version + `/monthcard/change-status`,
    //   GET_ROUTE_BY_PROVIDE_ID: `${environment.API_URL}/afc/v` + version + `/route/get-by-provider`,
    //   SEARCH_CARD: `${environment.API_URL}/afc/v` + version + `/monthcard/search-card`,
    //   GET_BY_PASSENGER_ID: `${environment.API_URL}/afc/v` + version + `/monthcard/getbypassengerid`,
    //   GET_PASSENGER_BY_ID_CARD: `${environment.API_URL}/afc/v` + version + `/monthpassenger/getbyidcard`,
    //   GET_BY_REQUEST_ID: `${environment.API_URL}/afc/v` + version + `/monthcard/getbyrequestid`

    // },
    // REPORT_TICKET: {
    //   SEARCH_REVENUE: `${environment.API_URL}/afc/v` + version + `/report/ticket-report`,
    //   SEARCH_DETAIL: `${environment.API_URL}/afc/v` + version + `/report/detail-ticket-report`,
    //   EXPORT_REVENUE: `${environment.API_URL}/afc/v` + version + `/report/export-ticket-report`,
    //   EXPORT_DETAIL: `${environment.API_URL}/afc/v` + version + `/report/export-detail-ticket-report`,
    //   SEND_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/job-export-tramoc-detail-ticket-report`,
    //   DOWNLOAD_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/export-tramoc-detail-ticket-report`,
    //   GET_PAYMENT_METHOD: `${environment.API_URL}/afc/v` + version + `/report/payment-type`,
    // },
    // REPORT_CARD: {
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/report/monthly-ticket-report`,
    //   DETAIL: `${environment.API_URL}/afc/v` + version + `/report/detail-monthly-ticket-report`,
    //   EXPORT_REVENUE: `${environment.API_URL}/afc/v` + version + `/report/export-monthly-ticket-report`,
    //   EXPORT_DETAIL: `${environment.API_URL}/afc/v` + version + `/report/export-detail-monthly-ticket-report`,
    //   SEND_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/job-export-tramoc-detail-monthly-ticket-report`,
    //   DOWNLOAD_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/export-tramoc-detail-monthly-ticket-report`,
    // },
    // REPORT_USED_CARD: {
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/report/used-month-card-history`,
    //   EXPORT: `${environment.API_URL}/afc/v` + version + `/report/export-used-month-card-history-report`,
    //   SEND_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/job-export-tramoc-used-month-card-history-report`,
    //   DOWNLOAD_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/export-tramoc-used-month-card-history-report`,


    // },
    // REPORT_ISSUANCE_CARD: {
    //   SEARCH: `${environment.API_URL}/afc/v` + version + `/report/month-card-issuance-report`,
    //   EXPORT: `${environment.API_URL}/afc/v` + version + `/report/export-month-card-issuance-report`,
    //   SEND_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/job-export-tramoc-month-card-issuance-report`,
    //   DOWNLOAD_REPORT_DETAIL_TRAMOC: `${environment.API_URL}/afc/v` + version + `/report/export-tramoc-month-card-issuance-report`,
    // },
    // REPORT_SYNC_SHIFT: {
    //   GET_TYPE: `${environment.API_URL}/afc/v` + version + `/report/shift-scheduler-type`,
    //   REPORT: `${environment.API_URL}/afc/v` + version + `/report/sync-shift-report`,
    //   SUMMARY_REPORT: `${environment.API_URL}/afc/v` + version + `/report/summary-schedule-by-shift?shiftSchedulerId=`,
    // },
    // R_SETTING: {
    //   GET_ALL: `${environment.API_URL}/tramoc/v` + version + `/rsetting/getall`,
    //   GET_BY_ID: `${environment.API_URL}/tramoc/v` + version + `/rsetting/getbyid/`,
    //   GET_ALL_AFC: `${environment.API_URL}/tramoc/v` + version + `/mafc/getall`,
    //   UPDATE: `${environment.API_URL}/tramoc/v` + version + `/rsetting/update`,
    //   UPLOAD_TEMPLATE: `${environment.API_URL}/tramoc/v` + version + `/rsetting/upload-template`,
    //   GET_BY_TRANSPORT_CODE: `${environment.API_URL}/tramoc/v` + version + `/rsetting/getbytramoccode`,
    // }

  }
};
