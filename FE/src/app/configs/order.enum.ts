/**
 * Because of reuseable Enums on this file,
 * I put it on Configs instead of Order module enum folder
 */

import { TranslateService } from "@ngx-translate/core";
import * as _ from "lodash";
import { environment } from "src/environments/environment";
import { STATUS_CODE } from ".";

export const ORDER_CODE = {
  BILLING_KE: "KE",
  REPLENISHMENT_KB: "KB",
  DIRECT_ORDER_OR: "OR",
  STC_REPLENISHMENT_ZKB: "ZKB",
  SCHEDULE_AGREEMENT_CO: "CO",
  INV_TRANSFER_FROM_ZTKA: "ZTKA",
  INV_TRANSFER_TO_ZTKB: "ZTKB",
  SAMPLE_DELIVERY_FD: "FD",
  FOC_CONSIGNMENT_COMPLAINT_CHARGE_OUT_ZKF: "ZKF",
  FOC_SAMPLE_FROM_CONSIGNMENT_ZKI: "ZKI",
  CONSIGNMENT_TRANSFER_ZTKA_ZTKB: "ZTKA/ZTKB",
  MEMO_REQUEST_CR_DR: "CR/DR",
  G01_ENTRY_ERROR_CS_CR: "CR",
  BLANKET_ORDER_DR: "DR",
  SALE_DEAL_SDP: "SDP",
  ONE_TIME_PRICE_OTP: "OTP",
  COMPLAINT_REPLACEMENT_ZNC: "ZNC",
  EVEN_EXCHANGE_ZRB: "ZRB",
  DEMO_NFHU_MB1A: "MB1A",
  // 09-02-2022
  DIRECT_ORDER_UPDATE: "ORU",
  SCHEDULING_AGREEMENT_UPDATE: "COU",
  CHEDULING_AGREEMENT_DRAWDOWN: "COD",
  // 05/04/2022
  CONSIGNMENT_RETURN: "KA",

  // KB for MY
  CONSIGNMENT_REPLENISHMENT_KBCR: "KBCR",
  STOCK_FOR_CASE_KBSC: "KBSC",
  SHORT_EXPIRY_CONSIGNMENT_KBSE: "KBSE",
  CONSIGNMENT_ISSUE_ZKFCI: "ZKFCI",

  ANY: 'Any',
  PLS: "PLS",
  BSA: "BSA"
};

export const OPEN_ORDER_CODE = {
  BILLING_KE: "KE",
  REPLENISHMENT_KB: "KB",
  DIRECT_ORDER_OR: "OR",
  STC_REPLENISHMENT_ZKB: "ZKB",
  SCHEDULE_AGREEMENT_CO: "CO",
  INV_TRANSFER_FROM_ZTKA: "ZTKA",
  INV_TRANSFER_TO_ZTKB: "ZTKB",
  SAMPLE_DELIVERY_FD: "FD",
  FOC_CONSIGNMENT_COMPLAINT_CHARGE_OUT_ZKF: "ZKF",
  FOC_SAMPLE_FROM_CONSIGNMENT_ZKI: "ZKI",
  CONSIGNMENT_TRANSFER_ZTKA_ZTKB: "ZTKA/ZTKB"
};


export const ORDER_CODE_DC = {
  EVEN_EXCHANGE_ZRB: "ZRB",
  DEMO_MB1A: "MB1A",
  COMPLAINT_REPLACEMENT: "ZNC",
  CONSIGNMENT_RETURN: "KA",
  INV_TRANSFER_FROM_ZTKA: "ZTKA",
  //for my
  STOCK_FOR_CASE_KBSC: "KBSC",
}

export const ORDER_TYPE = {
  BILLING_KE: 6,
  DIRECT_ORDER_OR: 8,
  REPLENISHMENT_KB: 44,
  STC_REPLENISHMENT_ZKB: 60,
  SCHEDULE_AGREEMENT_CO: 62,
  INV_TRANSFER: 64,
  SAMPLE_DELIVERY_FD: 70,
  FOC_SAMPLE_FROM_CONSIGNMENT_ZKI: 71,
  FOC_CONSIGNMENT_COMPLAINT_CHARGE_OUT_ZKF: 72,
  INV_TRANSFER_FROM_ZTKA: 64,
  G01_ENTRY_ERROR_CS_CR: 68,
  BLANKET_ORDER_DR: 9,
  SALE_DEAL_SDP: 75,
  ONE_TIME_PRICE_OTP: 76,

  CONSIGNMENT_REPLENISHMENT_KBCR: 45,
  STOCK_FOR_CASE_KBSC: 46,
  SHORT_EXPIRY_CONSIGNMENT_KBSE: 47
}

export const ORDER_TYPE_DC = {
  EVEN_EXCHANGE_ZRB: 67,
  DEMO_MB1A: 81,
  COMPLAINT_REPLACEMENT: 66,
  CONSIGNMENT_RETURN: 21
}

export const COUNTRY = {
  MY: 'my',
  SG: 'sg',
  TW: 'tw'
}

export const ORDER_TYPE_LIST = [
  { value: 6, text: 'ENUM.KE', sub_text: '(KE)', code: "BILLING_KE", country: [] as string[] },
  { value: 8, text: 'MENU.ORDER.TYPE_OR', sub_text: '(OR)', code: "DIRECT_ORDER_OR", country: [] as string[] },
  { value: 44, text: 'ENUM.KB', sub_text: '(KB)', code: "REPLENISHMENT_KB", country: [COUNTRY.SG] as string[] },
  { value: 60, text: 'ENUM.ZKB', sub_text: '(ZKB)', code: "STC_REPLENISHMENT_ZKB", country: [COUNTRY.SG] as string[] },
  { value: 62, text: 'MENU.ORDER.TYPE_CO', sub_text: '(CO)', code: "SCHEDULE_AGREEMENT_CO", country: [] as string[] },
  {
    value: 64, text: 'ENUM.ZTKA_ZTKB', sub_text: '(ZTKA/ZTKB)', code: "INV_TRANSFER",
    codes: ["INV_TRANSFER_FROM_ZTKA", "INV_TRANSFER_TO_ZTKB"], country: [] as string[]
  },
  { value: 70, text: 'MENU.ORDER.TYPE_FD', sub_text: '(FD)', code: "SAMPLE_DELIVERY_FD", country: [] as string[] },
  { value: 71, text: 'MENU.ORDER.TYPE_ZKI', sub_text: '(ZKI)', code: "FOC_SAMPLE_FROM_CONSIGNMENT_ZKI", country: [] as string[] },
  { value: 72, text: 'MENU.ORDER.TYPE_ZKF', sub_text: '(ZKF)', code: "FOC_CONSIGNMENT_COMPLAINT_CHARGE_OUT_ZKF", country: [] as string[] },
  { value: 64, text: 'MENU.ORDER.TYPE_ZTKA_OUT', sub_text: '(ZTKA)', code: "INV_TRANSFER_FROM_ZTKA", country: [] as string[] },
  { value: 65, text: 'MENU.ORDER.TYPE_ZTKB', sub_text: '(ZTKB)', code: "INV_TRANSFER_TO_ZTKB", country: [] as string[] },
  { value: 68, text: 'MENU.ORDER.TYPE_CR', sub_text: '(CR)', code: "G01_ENTRY_ERROR_CS_CR", country: [] as string[] },
  { value: 9, text: 'MENU.ORDER.TYPE_DR', sub_text: '(DR)', code: "BLANKET_ORDER_DR", country: [] as string[] },
  { value: 75, text: 'MENU.ORDER.TYPE_SDP', sub_text: '(SDP)', code: "SALE_DEAL_SDP", country: [] as string[] },
  { value: 76, text: 'MENU.ORDER.TYPE_OTP', sub_text: '(OTP)', code: "ONE_TIME_PRICE_OTP", country: [] as string[] },
  // add new 06-12-2021
  { value: 66, text: 'MENU.ORDER.TYPE_ZNC', sub_text: '(ZNC)', code: "COMPLAINT_REPLACEMENT_ZNC", country: [] as string[] },
  { value: 67, text: 'MENU.ORDER.TYPE_ZRB', sub_text: '(ZRB)', code: "EVEN_EXCHANGE_ZRB", country: [] as string[] },
  { value: 81, text: 'MENU.ORDER.TYPE_MB1A', sub_text: '(MB1A)', code: "DEMO_NFHU_MB1A", country: [] as string[] },

  // 08-02-2022
  { value: 10, text: 'MENU.ORDER.TYPE_ORU', sub_text: '(ORU)', code: "DIRECT_ORDER_UPDATE", country: [COUNTRY.SG] as string[] },
  { value: 32, text: 'MENU.ORDER.TYPE_COU', sub_text: '(COU)', code: "SCHEDULING_AGREEMENT_UPDATE", country: [COUNTRY.SG] as string[] },
  { value: 33, text: 'MENU.ORDER.TYPE_COD', sub_text: '(COD)', code: "CHEDULING_AGREEMENT_DRAWDOWN", country: [COUNTRY.SG] as string[] },

  { value: 45, text: 'MENU.ORDER.TYPE_KBCR', sub_text: '', code: "CONSIGNMENT_REPLENISHMENT_KBCR", country: [COUNTRY.MY] as string[] },
  { value: 46, text: 'MENU.ORDER.TYPE_KBSC', sub_text: '', code: "STOCK_FOR_CASE_KBSC", country: [COUNTRY.MY] as string[] },
  { value: 47, text: 'MENU.ORDER.TYPE_KBSE', sub_text: '', code: "SHORT_EXPIRY_CONSIGNMENT_KBSE", country: [COUNTRY.MY] as string[] },

  { value: 48, text: 'MENU.ORDER.TYPE_ZKFCI', sub_text: '(ZKFCI)', code: "CONSIGNMENT_ISSUE_ZKFCI", country: [] as string[] },
  { value: 21, text: 'MENU.ORDER.TYPE_KA', sub_text: '(KA)', code: "CONSIGNMENT_RETURN", country: [] as string[] },
]

export const ORDER_TYPES_DC = [
  { value: 67, text: 'ENUM.EVEN_EXCHANGE_', sub_text: '(ZRB)', code: "EVEN_EXCHANGE_ZRB" },
  { value: 81, text: 'ENUM.DEMO_MB1A', sub_text: '(MB1A)', code: "DEMO_MB1A" },
  { value: 21, text: 'ENUM.CONSIGNMENT_RETURN', sub_text: '(KA)', code: "CONSIGNMENT_RETURN" }
]

export const ORDER_TYPES_CC = [
  // { value: 67, text: 'ENUM.EVEN_EXCHANGE_', sub_text: '(ZRB)', code: "EVEN_EXCHANGE_ZRB" },
  { value: 81, text: 'ENUM.DEMO_MB1A', sub_text: '(MB1A)', code: "DEMO_MB1A" },
  { value: 64, text: 'MENU.ORDER.TYPE_ZTKA', sub_text: '(ZTKA)', code: "INV_TRANSFER_FROM_ZTKA", country: [] as string[] },
]



export const MOVEMENT_TYPE = {
  MOBILE_KIT_RETURN: "MOBILE_KIT_RETURN",
  NORMAL_RETURN: "NORMAL_RETURN",
  NORMAL_OUTBOUND: "NORMAL_OUTBOUND",
  MOBILE_KIT_OUTBOUND: "MOBILE_KIT_OUTBOUND",
  MOBILE_KIT_TRANSFER: "TRANSFER",
  NORMAL_TRANSFER: "TRANSFER",
  SAMPLE_OUTBOUND: "SAMPLE_OUTBOUND",
  DEMO_OUTBOUND: "DEMO_OUTBOUND",
};
export const ORDER_STATUS = {
  SUBMITTED: STATUS_CODE.ORDER_SUBMITTED,
  DRAFT: STATUS_CODE.ORDER_DRAFT
}
export const ORDER_SHIP_TYPE = [
  {
    label: 'ENUM.ORDER_SHIP_FULL_SHIPMENT',
    value: 'Full Shipment'
  },
  {
    label: 'ENUM.ORDER_SHIP_SPLIT_SHIPMENT',
    value: 'Split Shipment'
  }
]



export const ORDER_DISCOUNT_REASON = {
  MUL_PRO_CONS: "MUL_PRO_CONS",
  PRI_WIT_GUI: "PRI_WIT_GUI",
  PRO_COM: "PRO_COM",
  PROM: "PROM",
  TEN_LES_10: "TEN_LES_10",
  TEN_GRT_10: "TEN_GRT_10",
  SAL_DEA: "SAL_DEA",
  OTHER: "OTH"
}


export const sortOrderType = (translate: TranslateService, orderTypes: any[]) => {
  const _orderTypes = orderTypes.map(t => {
    return { ...t, translatedTitle: translate.instant(t.text) }
  });

  return _.orderBy(_orderTypes, 'translatedTitle')
}
/*from BE
public enum ORDER_TYPE {
  CONSIGNMENT_BILLING(6, "KE"),
  CONSIGNMENT_REPLENISHMENT(7, "KB"),
  DIRECT_ORDER(8, "OR"),
  BLANKET_ORDER(9, "BO"),
  REPLENISHMENT(44, "KB"),
  REPLENISHMENT_CONSIGNMENT(56, "KE"),
  STC_REPLENISHMENT(60, "ZKB"),
  SCHEDULING_AGREEMENT(62, "CO"),
  CONSIGNMENT_MONTH_END_BILLING(63, "KE"),
  CONSIGNMENT_TRANSFER_OUT(64, "ZTKA"),
  CONSIGNMENT_TRANSFER_IN(65, "ZTKB"),
  EVEN_EXCHANGE(66, "ZTKA"),
  EVEN_EXCHANGE_ZTKB(67, "ZTKB"),
  G01_ENTRY_ERROR_CS(68,"CR");
}*/

export const SPECIAL_DIVISIONS = [
  'CRM',
  'PM'
]

export const DEFAULT_VALUE_FD_ORDER = {
  D02: 'Sales Samples',
  D03: 'Marketing Sample',
  G44: 'Product Evaluation',
  TP1: 'Public tender',
  J09: 'New Product Introduction',
}

export const DEFAULT_VALUE_KBCR_ORDER = {
  B01LTCR: 'Replenishment',
  Z23: 'New Par / Par Adjustment',
  Z24: 'Advance Stock',
}

export const COUNTRY_ALWAY_SHOW_JUSTIFICATION = [COUNTRY.SG]
export const COUNTRY_ALWAY_SHOW_REPLENISHMENT = [COUNTRY.SG, COUNTRY.MY, COUNTRY.TW]

export const ORDER_AFTER_HAS_JUSTIFICATION = [
  {
    currentOrder: [
      ORDER_CODE.COMPLAINT_REPLACEMENT_ZNC
    ],
    afterOrder: [
      ORDER_CODE.EVEN_EXCHANGE_ZRB
    ]
  }
]

export const ORDER_HAS_JUSTIFICATION = [
  ORDER_CODE.G01_ENTRY_ERROR_CS_CR,
  ORDER_CODE.MEMO_REQUEST_CR_DR,
  ORDER_CODE.SAMPLE_DELIVERY_FD,
  ORDER_CODE.REPLENISHMENT_KB,
  ORDER_CODE.CONSIGNMENT_REPLENISHMENT_KBCR,
  ORDER_CODE.BILLING_KE,
  ORDER_CODE.CONSIGNMENT_ISSUE_ZKFCI,
  ORDER_CODE.FOC_CONSIGNMENT_COMPLAINT_CHARGE_OUT_ZKF,
  ORDER_CODE.FOC_SAMPLE_FROM_CONSIGNMENT_ZKI,
  ORDER_CODE.COMPLAINT_REPLACEMENT_ZNC,
  ORDER_CODE.EVEN_EXCHANGE_ZRB
]

export const ORDER_SPECIFIC_JUSTIFICATION = [
  ORDER_CODE.G01_ENTRY_ERROR_CS_CR,
  ORDER_CODE.MEMO_REQUEST_CR_DR,
  ORDER_CODE.CONSIGNMENT_ISSUE_ZKFCI,
  // ORDER_CODE.FOC_CONSIGNMENT_COMPLAINT_CHARGE_OUT_ZKF,
  // ORDER_CODE.COMPLAINT_REPLACEMENT_ZNC,
  ORDER_CODE.EVEN_EXCHANGE_ZRB
]

export const ORDER_REPLENISHMENT = [
  ORDER_CODE.BILLING_KE,
  ORDER_CODE.FOC_CONSIGNMENT_COMPLAINT_CHARGE_OUT_ZKF,
  ORDER_CODE.CONSIGNMENT_ISSUE_ZKFCI
]

export const ORDER_MANDATORY_MARK = [
  ORDER_CODE.SHORT_EXPIRY_CONSIGNMENT_KBSE
]

export const INSUFFICIENT_STOCK_ORDER = [
  ORDER_CODE.BILLING_KE
]

export const NUM_DAY_CHECK_EVALUATION = [
  {
    country: [COUNTRY.SG],
    numDay: 90
  },
  {
    country: [COUNTRY.MY],
    numDay: 60
  }
]

/**
 * Get string from local to Server
 * @param type Type of local: "ONE_TIME_SPECIAL" | "LIST_PRICE" | "SALES_DEAL"
 * @returns ONE_TIME_PRICE, SALE_DEAL_PRICE, LIST_PRICE of server enum
 */
export const getPriceTypeToSubmit = (type = ''): string => {
  switch (type) {
    case 'ONE_TIME_SPECIAL':
      return 'ONE_TIME_PRICE';

    case 'SALES_DEAL':
      return 'SALE_DEAL_PRICE';
    case 'SAP_PRICE':
      return 'SAP_PRICE';
    case 'LIST_PRICE':
      return 'LIST_PRICE';
    default: break;
  }
  return 'LIST_PRICE';
}


/**
 * Get string from SERVER to local
 * @param type Type of server: ONE_TIME_PRICE, SALE_DEAL_PRICE, LIST_PRICE of server enum
 * @returns "ONE_TIME_SPECIAL" | "LIST_PRICE" | "SALES_DEAL"
 */
export const getPriceTypeToLocal = (type = ''): string => {
  switch (type) {
    case 'ONE_TIME_PRICE':
      return 'ONE_TIME_SPECIAL';

    case 'SALE_DEAL_PRICE':
      return 'SALES_DEAL';

    case 'LIST_PRICE':
      return 'LIST_PRICE';

    default: break;
  }
  return 'LIST_PRICE';
}

export const SHOW_PRICE_TYPE = [
  ORDER_CODE.EVEN_EXCHANGE_ZRB,
  ORDER_CODE.BILLING_KE,
  ORDER_CODE.DIRECT_ORDER_OR
]

export const SHOW_REQUEST_DELIVERY_TIME = [
  ORDER_CODE.REPLENISHMENT_KB,
  ORDER_CODE.STC_REPLENISHMENT_ZKB,
  ORDER_CODE.COMPLAINT_REPLACEMENT_ZNC,
]
export const AUTO_UPPERCASE_VALUE_BY_COUNTRY = [COUNTRY.MY]

export const PRIORITY_PRICE_ORDER = [
  ORDER_CODE.DIRECT_ORDER_OR,
  ORDER_CODE.DIRECT_ORDER_UPDATE,
  ORDER_CODE.BILLING_KE
]

export const SHOW_AVAILABLE_BATCH = [
  ORDER_CODE.REPLENISHMENT_KB,
  ORDER_CODE.STC_REPLENISHMENT_ZKB,
]

export const SHOW_SHEF_LIFE_AVAILABLE = [
  ORDER_CODE.REPLENISHMENT_KB,
  ORDER_CODE.STC_REPLENISHMENT_ZKB,
]

export const SHOW_OPEN_ORDER = [
  ORDER_CODE.REPLENISHMENT_KB,
  ORDER_CODE.STC_REPLENISHMENT_ZKB,
]
