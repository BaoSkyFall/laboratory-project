export const STATUS_TYPE = {
  LEGAL: "legal",
  APPROVAL: "Approval",
  ORDER: 'order',
  RFID: 'rfid',
  CYCLE_COUNT: 'cycleCount',
  TEMP: 'temp',
  CIP: 'cip',
  BUNDLE: 'bundle',
  DC_CHECK: 'dcCheck',
  CC_CHECK: 'ccCheck'
}

export const STATUS_CODE = {
  ORDER_SUBMITTED: 'ORDER_SUBMITTED',
  // ORDER_CANCEL: 'ORDER_CANCEL',
  ORDER_DRAFT: 'ORDER_DRAFT',
  ORDER_WAITING_APPROVE: 'ORDER_WAITING_APPROVAL',
  ORDER_SUBMITTED_SAP: 'ORDER_SUBMITTED_SAP',
  ORDER_COMPLETED_APPROVAL: 'ORDER_COMPLETED_APPROVAL',
  ORDER_REJECTED: 'ORDER_REJECTED',
  ORDER_NOT_REQUIRED: 'ORDER_NOT_REQUIRED',
  ORDER_PENDING_BILLING: 'ORDER_PENDING_BILLING',
  ORDER_APPROVED: 'ORDER_APPROVED',
  ORDER_COMPLETED: 'ORDER_COMPLETED',
  ORDER_REWORK: 'ORDER_REWORK',
  ORDER_FAILED_SAP_SUBMISSION: 'ORDER_FAILED_SAP_SUBMISSION',
  FAILED_SAP_SUBMISSION: 'FAILED_SAP_SUBMISSION',

  APPROVAL_SUBMITTED: "SUBMITTED",
  APPROVAL_PENDING: "PENDING",
  APPROVAL_APPROVED: "APPROVED",
  APPROVAL_REJECTED: "REJECTED",
  APPROVAL_COMPLETED: "COMPLETED",
  APPROVAL_SUBMITTED_SAP: "SUBMITTED_SAP",
  APPROVAL_REWORK: "REWORK",
  APPROVAL_CANCELLED: "CANCELLED",

  WAITING_APPROVAL: 'WAITING_APPROVAL',
  COMPLETED_APPROVAL: "COMPLETED_APPROVAL",
  REJECTED_APPROVAL: "REJECTED_APPROVAL",

  ORDER_LEGACY: "ORDER_LEGACY",

  CC_CONCILIATION_COMPLETED: "CONCILIATION_COMPLETED",
  CC_IN_PROGRESS: "IN_PROGRESS",
  CC_VERIFICATION_COMPLETED: "VERIFICATION_COMPLETED",
  CC_COUNT_COMPLETED: "COUNT_COMPLETED",
  CC_EXCESS: "EXCESS",
  CC_UNBILLED: "UNBILLED",
  CC_MATCHED: "MATCHED",
  CC_ALL: "ALL",
  CC_CLOSED: "CLOSED",
  CC_PRELIMINARY_RECON_COMPLETED: "PRELIMINARY_RECON_COMPLETED",
  CC_RECONCILIATING: "RECONCILIATING",
  CC_PENDING_SAP_POSTING: "PENDING_SAP_POSTING",
  CC_RECONCILED: "RECONCILED",

  CYCLE_TRANFERRED_UBB: 'CYCLE_TRANSFERRED_UUB',
  CYCLE_RECONCILED: 'CYCLE_RECONCILED',

  CIP_NORMAL: 'CIP_NORMAL',
  CIP_CONFIRMED: 'CIP_CONFIRMED',

  ALL_TEMP_VALUE: '_________ALL________',
  DEFAULT: 'DEFAULT',
  EXPIRED: 'EXPIRED',

  GAP_FOC_APPROVAL: 'FOC_APPROVAL',
  GAP_SAMPLE_APPROVAL: 'SAMPLE_APPROVAL',
  GAP_FOC_CHARGED_OUT: 'FOC_APPROVAL',
  GAP_SAMPLE_CHARGED_OUT: 'SAMPLE_APPROVAL',
  // new for Bundle 03-12-2021
  BUNDLE_WAITING_APPROVAL: 'WAITING_APPROVAL',
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  REJECTED: 'REJECTED',
  // new since Nov 2nd, 2021
  ORDER_WAITING_DC_CHECK: 'ORDER_WAITING_DC_CHECK',
  ORDER_WAITING_CC_CHECK: 'ORDER_WAITING_CC_CHECK',
  ORDER_CREDIT_BLOCK: 'ORDER_CREDIT_BLOCK',
  ORDER_BILLING_BLOCK: 'ORDER_BILLING_BLOCK',
  ORDER_BEING_PROCESSED: 'ORDER_BEING_PROCESSED',
  ORDER_PARTIALLY_PROCESSED: 'ORDER_PARTIALLY_PROCESSED',
  ORDER_WAITING_TO_SUBMIT_SAP: 'ORDER_WAITING_TO_SUBMIT_SAP',
  ORDER_CANCELLED: 'ORDER_CANCELLED',
  COMPLETELY_PROCESSED: 'COMPLETELY_PROCESSED',
  NOT_YET_PROCESSED: 'NOT_YET_PROCESSED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
  PARTIALLY_PROCESSED: 'PARTIALLY_PROCESSED',

  ORDER_DELIVERY_BLOCK: 'ORDER_DELIVERY_BLOCK',
  // new since Feb 16th, 2022
  WAITING_TO_SUBMIT_SAP: 'WAITING_TO_SUBMIT_SAP',
  FAILED: 'FAILED',
  SUCCESS: 'SUCCESS',
  NOT_TRANSFER: 'NOT_TRANSFER',
  // update 25/04/2022
  AUTO_APPROVED: 'AUTO_APPROVED'
}

export const STATUSES_APP: IStatusApp[] = [
  // #region Customer legal status
  {
    code: 'BLANK',
    text: "STATUS.BLANK",
    class: "",
    fill: "CCC",
    css_style: "stroke",
    type: STATUS_TYPE.LEGAL,
    id: 0
  },
  {
    code: "LEGAL_LTC",
    text: "STATUS.LEGAL_LTC",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.LEGAL,
    id: 0
  },
  {
    code: "LEGAL_STC",
    text: "STATUS.LEGAL_STC",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.LEGAL,
    id: 0
  },
  {
    code: "LEGAL_OAD",
    text: "STATUS.LEGAL_OAD",
    class: "",
    fill: "DE8500",
    css_style: "stroke",
    type: STATUS_TYPE.LEGAL,
    id: 0
  },
  {
    code: "LEGAL_PPO",
    text: "STATUS.LEGAL_PPO",
    class: "",
    fill: "DC4A48",
    css_style: "stroke",
    type: STATUS_TYPE.LEGAL,
    id: 0
  },
  //#endregion
  //#region Order status
  {
    code: STATUS_CODE.ORDER_SUBMITTED,
    text: "STATUS.SUBMITTED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_CANCELLED,
    text: "STATUS.ORDER_CANCELLED",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_DRAFT,
    text: "STATUS.ORDER_DRAFT",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_WAITING_APPROVE,
    text: "STATUS.ORDER_WAITING_APPROVE",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_SUBMITTED_SAP,
    text: "STATUS.SUBMITTED_SAP",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_COMPLETED_APPROVAL,
    text: "STATUS.COMPLETED_APPROVAL",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_COMPLETED,
    text: "STATUS.COMPLETED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_REJECTED,
    text: "STATUS.REJECTED",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_REWORK,
    text: "STATUS.ORDER_REWORK",
    class: "",
    fill: "E0AF00",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_FAILED_SAP_SUBMISSION,
    text: "STATUS.ORDER_FAILED_SAP_SUBMISSION",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },

  {
    code: STATUS_CODE.FAILED_SAP_SUBMISSION,
    text: "STATUS.ORDER_FAILED_SAP_SUBMISSION",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  // new since Nov 2nd, 2021
  {
    code: STATUS_CODE.ORDER_WAITING_DC_CHECK,
    text: "STATUS.ORDER_WAITING_DC_CHECK",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_CREDIT_BLOCK,
    text: "STATUS.ORDER_CREDIT_BLOCK",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_BILLING_BLOCK,
    text: "STATUS.ORDER_BILLING_BLOCK",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_BEING_PROCESSED,
    text: "STATUS.ORDER_BEING_PROCESSED",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_PARTIALLY_PROCESSED,
    text: "STATUS.ORDER_PARTIALLY_PROCESSED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_WAITING_TO_SUBMIT_SAP,
    text: "STATUS.ORDER_WAITING_TO_SUBMIT_SAP",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_DELIVERY_BLOCK,
    text: "STATUS.ORDER_DELIVERY_BLOCK",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },

  // new sine 16th, May
  {
    code: STATUS_CODE.ORDER_WAITING_CC_CHECK,
    text: "STATUS.ORDER_WAITING_CC_CHECK",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },

  // {
  //   code: STATUS_CODE.ORDER_CANCELLED,
  //   text: "STATUS.ORDER_CANCELLED",
  //   class: "",
  //   fill: "FF0000",
  //   css_style: "stroke",
  //   type: STATUS_TYPE.ORDER,
  //   id: 0
  // },

  //#endregion
  //#region  Approval Status
  {
    code: STATUS_CODE.APPROVAL_SUBMITTED,
    text: "STATUS.SUBMITTED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.APPROVAL_PENDING,
    text: "STATUS.PENDING",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.WAITING_APPROVAL,
    text: "STATUS.WAITING_APPROVAL",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.APPROVAL_APPROVED,
    text: "STATUS.APPROVED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.APPROVAL_REJECTED,
    text: "STATUS.REJECTED",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.APPROVAL_COMPLETED,
    text: "STATUS.COMPLETED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.APPROVAL_SUBMITTED_SAP,
    text: "STATUS.SUBMITTED_SAP",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.WAITING_APPROVAL,
    text: "STATUS.WAITING_APPROVAL",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.COMPLETED_APPROVAL,
    text: "STATUS.COMPLETED_APPROVAL",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.REJECTED_APPROVAL,
    text: "STATUS.REJECTED_APPROVAL",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.APPROVAL_REWORK,
    text: "STATUS.ORDER_REWORK",
    class: "",
    fill: "E0AF00",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_LEGACY,
    text: "STATUS.ORDER_LEGACY",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.LEGAL,
    id: 0
  },
  {
    code: STATUS_CODE.CC_CONCILIATION_COMPLETED,
    text: "STATUS.CC_CONCILIATION_COMPLETED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_IN_PROGRESS,
    text: "STATUS.CC_IN_PROGRESS",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_VERIFICATION_COMPLETED,
    text: "STATUS.CC_VERIFICATION_COMPLETED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_COUNT_COMPLETED,
    text: "STATUS.CC_COUNT_COMPLETED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_CLOSED,
    text: "STATUS.CC_CLOSED",
    class: "",
    fill: "737373",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_PRELIMINARY_RECON_COMPLETED,
    text: "STATUS.CC_PRELIMINARY_RECON_COMPLETED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_RECONCILIATING,
    text: "STATUS.CC_RECONCILIATING",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_PENDING_SAP_POSTING,
    text: "STATUS.CC_PENDING_SAP_POSTING",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_RECONCILED,
    text: "STATUS.CC_RECONCILED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.RFID,
    id: 0
  },
  {
    code: STATUS_CODE.CC_EXCESS,
    text: "STATUS.CC_EXCESS",
    class: "",
    fill: "FF0000",
    css_style: "text",
    type: STATUS_TYPE.CYCLE_COUNT,
    id: 0
  },
  {
    code: STATUS_CODE.CC_UNBILLED,
    text: "STATUS.CC_UNBILLED",
    class: "",
    fill: "FF9900",
    css_style: "text",
    type: STATUS_TYPE.CYCLE_COUNT,
    id: 0
  },
  {
    code: STATUS_CODE.CC_MATCHED,
    text: "STATUS.CC_MATCHED",
    class: "",
    fill: "005FFF",
    css_style: "text",
    type: STATUS_TYPE.CYCLE_COUNT,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_NOT_REQUIRED,
    text: "STATUS.ORDER_NOT_REQUIRED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_PENDING_BILLING,
    text: "STATUS.ORDER_PENDING_BILLING",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.ORDER,
    id: 0
  },
  {
    code: STATUS_CODE.ALL_TEMP_VALUE,
    text: "APPROVAL.REQUEST_TYPE_ENUM.ALL",
    class: "",
    fill: "777",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_APPROVED,
    text: "STATUS.APPROVED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },

  //#endregion

  {
    code: STATUS_CODE.CYCLE_RECONCILED,
    text: "STATUS.CYCLE_RECONCILED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  {
    code: STATUS_CODE.CYCLE_TRANFERRED_UBB,
    text: "STATUS.CYCLE_TRANFERRED_UBB",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  {
    code: STATUS_CODE.CIP_CONFIRMED,
    text: "STATUS.CIP_CONFIRMED",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.CIP,
    id: 0
  },
  {
    code: STATUS_CODE.EXPIRED,
    text: "STATUS.EXPIRED",
    class: "",
    fill: "FF0000",
    css_style: "text",
    type: STATUS_TYPE.CYCLE_COUNT,
    id: 0
  },

  {
    code: STATUS_CODE.BUNDLE_WAITING_APPROVAL,
    text: "STATUS.WAITING_APPROVAL",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.BUNDLE,
    id: 0
  },
  {
    code: STATUS_CODE.ACTIVE,
    text: "STATUS.ACTIVE",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.BUNDLE,
    id: 0
  },
  {
    code: STATUS_CODE.DISABLED,
    text: "STATUS.DISABLED",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.BUNDLE,
    id: 0
  },
  {
    code: STATUS_CODE.REJECTED,
    text: "STATUS.REJECTED",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.BUNDLE,
    id: 0
  },
  {
    code: STATUS_CODE.GAP_FOC_APPROVAL,
    text: "STATUS.GAP_FOC_APPROVAL",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  {
    code: STATUS_CODE.GAP_SAMPLE_APPROVAL,
    text: "STATUS.GAP_SAMPLE_APPROVAL",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_WAITING_DC_CHECK,
    text: "STATUS.ORDER_WAITING_DC_CHECK",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.DC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_REWORK,
    text: "STATUS.ORDER_REWORK",
    class: "",
    fill: "E0AF00",
    css_style: "stroke",
    type: STATUS_TYPE.DC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_WAITING_CC_CHECK,
    text: "STATUS.ORDER_WAITING_CC_CHECK",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.DC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_FAILED_SAP_SUBMISSION,
    text: "STATUS.ORDER_FAILED_SAP_SUBMISSION",
    class: "",
    fill: "FF9900",
    css_style: "stroke",
    type: STATUS_TYPE.CC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_SUBMITTED_SAP,
    text: "STATUS.SUBMITTED_SAP",
    class: "",
    fill: "005FFF",
    css_style: "stroke",
    type: STATUS_TYPE.DC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_REJECTED,
    text: "STATUS.REJECTED",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.DC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_CANCELLED,
    text: "STATUS.ORDER_CANCEL",
    class: "",
    fill: "FF0000",
    css_style: "stroke",
    type: STATUS_TYPE.DC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.ORDER_COMPLETED,
    text: "STATUS.COMPLETED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.DC_CHECK,
    id: 0
  },
  {
    code: STATUS_CODE.COMPLETELY_PROCESSED,
    text: "STATUS.COMPLETELY_PROCESSED",
    class: "",
    fill: "00AE11",
    css_style: "text",
    type: '',
    id: 0
  },
  {
    code: STATUS_CODE.NOT_YET_PROCESSED,
    text: "STATUS.NOT_YET_PROCESSED",
    class: "",
    fill: "FF9900",
    css_style: "text",
    type: '',
    id: 0
  },
  {
    code: STATUS_CODE.NOT_AVAILABLE,
    text: "STATUS.NOT_AVAILABLE",
    class: "",
    fill: "FF0000",
    css_style: "text",
    type: '',
    id: 0
  },
  {
    code: STATUS_CODE.PARTIALLY_PROCESSED,
    text: "STATUS.PARTIALLY_PROCESSED",
    class: "",
    fill: "FF9900",
    css_style: "text",
    type: '',
    id: 0
  },
  // #region unbilled usage transfer uub status
  {
    code: STATUS_CODE.WAITING_TO_SUBMIT_SAP,
    text: "STATUS.ORDER_WAITING_TO_SUBMIT_SAP",
    class: "simple-status",
    fill: "de8500",
    css_style: "text",
    type: '',
    id: 0
  },
  {
    code: STATUS_CODE.FAILED,
    text: "STATUS.FAILED",
    class: "simple-status",
    fill: "ff0000",
    css_style: "text",
    type: '',
    id: 0
  },
  {
    code: STATUS_CODE.SUCCESS,
    text: "STATUS.SUCCESS",
    class: "simple-status",
    fill: "005fff",
    css_style: "text",
    type: '',
    id: 0
  },
  {
    code: STATUS_CODE.NOT_TRANSFER,
    text: "STATUS.NOT_TRANFER",
    class: "simple-status",
    fill: "de8500",
    css_style: "text",
    type: '',
    id: 0
  },
  {
    code: STATUS_CODE.APPROVAL_CANCELLED,
    text: "STATUS.CANCELLED",
    class: "",
    fill: "ff0000",
    css_style: "stroke",
    type: STATUS_TYPE.APPROVAL,
    id: 0
  },
  {
    code: STATUS_CODE.AUTO_APPROVED,
    text: "STATUS.AUTO_APPROVED",
    class: "",
    fill: "00AE11",
    css_style: "stroke",
    type: STATUS_TYPE.TEMP,
    id: 0
  }
]

/**
* Get sstatus list with type
* @param _type Type of status
* @returns List of Status like IStatusApp[]
*/
export const getStatusByType =
  (_type: string): IStatusApp[] => {
    return STATUSES_APP.filter(item => item.type === _type);
  }
export const getStatusByCode = (code: string) => {
  return STATUSES_APP.find(t => t.code === code);
}
export interface IStatusApp {
  code: string; // code for status
  text: string; // resource translate key
  class: string; // apply for classes element
  fill: string; // color on export excel
  id: number; // user for id
  type: string; // use for group status to get status
  css_style: "fill" | "stroke" | "label" | "text"; // "fill" | "stroke" | "label" | "text"
}

export enum OFFERING_STATUS {
  ACTIVE = "ACTIVE",
  PHASE_OUT = "PHASE_OUT",
  LAUNCH_PLANNING = "LAUNCH_PLANNING",
  NEW_PRODUCT = "NEW_PRODUCT",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  ONLY_FOR_UNBOXING = "ONLY_FOR_UNBOXING"
}

export const OFFERING_STATUS_LIST = [
  OFFERING_STATUS.ACTIVE,
  OFFERING_STATUS.PHASE_OUT,
  OFFERING_STATUS.LAUNCH_PLANNING,
  OFFERING_STATUS.NEW_PRODUCT,
  OFFERING_STATUS.NOT_AVAILABLE,
  OFFERING_STATUS.ONLY_FOR_UNBOXING,
]


export const ONLY_MY_CC_REPORT = [
  STATUS_CODE.CC_PRELIMINARY_RECON_COMPLETED,
  STATUS_CODE.CC_RECONCILIATING,
  STATUS_CODE.CC_PENDING_SAP_POSTING,
  STATUS_CODE.CC_RECONCILED
];

export const LEGAL_STATUS_LIST = [
  // { name: "Capital Equipment", code: "CAPITAL_EQUIPMENT" },
  // { name: "Clinical Consignment", code: "CLINICAL_CONSIGNMENT" },
  // { name: "Financial Accts", code: "FINANCIAL_ACTS" },
  // { name: "Loaner Kit", code: "LOANER_KIT" },
  { name: "Long Term Consign", code: "LONG_TERM_CONSIGN" },
  { name: "Short Term Consign", code: "SHORT_TERM_CONSIGN" },
  { name: "Order Advancement", code: "ORDER_ADVANCEMENT" },
  { name: "Pending PO", code: "PENDING_PO" },
  // { name: "Sold To Party", code: "SOLD_TO_PARTY" },
  // { name: "Trunk Stock", code: "TRUNK_STOCK" }
]

