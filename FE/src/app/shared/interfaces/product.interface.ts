import * as _ from "lodash";
import { IAvailableBatch } from "./common.interface";

export interface IProductItem {
  productCode: string;
  productName: string;
  productUPN: string;

  id?: number;
  qty: number;
  multiply?: number;
  inventoryQty?: number;
  total?: number;
  check?: boolean;
  children: IProductItem[];
  isFav?: boolean;
  idFav?: number;
  prevQty?: number;
  clean?: number;
  lotCode?: string;
  lotName?: string;
  tempId?: number;
  batchCode?: string;
  batchName?: string;
  batchNoZero?: string;
  slocQty?: number;
  consumpQty?: number;

  remainSlocQty?: number;

  newPrice?: number | null | string;
  sdPrice?: number | null;
  stdCost?: number;
  netPrice?: number | null;
  totalPrice?: number;
  caseID?: string;
  doctorName?: string;
  usageDate?: any;

  soldToCode?: string;
  soldToName?: string;

  reason?: string;
  reasonObject?: any;
  changeReason?: string;

  remark?: string;
  twNumberProduct?: string;

  division?: string;
  divisionUser?: string;

  tempCode?: string;
  tempCodeFull?: string;

  visibleUI?: any;
  extraData?: any;
  loadingFav?: boolean;

  errorReason?: boolean;

  level1?: IChildLevelProductSearchItem;
  level2?: IChildLevelProductSearchItem;
  level3?: IChildLevelProductSearchItem;
  level4?: IChildLevelProductSearchItem;
  level5?: IChildLevelProductSearchItem;
  product?: IChildProductSearchItem;
  discountPercentage?: number | null;

  openOrder?: number | null;
  parCheck?: number | null;
  invQty?: number | null;
  parLevel?: number | null;

  providedHistoryCheck?: boolean;
  salesHistoryDtoCheck?: boolean;
  limitationRuleExeedDtoCheck?: boolean; // case max quantity
  deliveryStatus?: string;
  deliveries?: any[];
  rejectedReason?: string;

  maxLimitProductQty?: number;
  providedHistory?: any;
  salesHistoryDto?: any;
  productsGroupReq?: any;
  inventoryStatus?: string;
  drawQty?: number;
  requestQty?: number;
  exceededRuleQty?: number;

  expand?: boolean;
  orderBundle?: any;//{ code: string, name: string, valid?: boolean } | null;
  bundleName?: string;
  bundlePrice?: number;

  priceObj?: any;
  upn?: string;
  quantity?: number;
  isTemp?: string;
  originalOrderQty?: number;
  orderQty?: number;
  expiredDate?: any | number;

  batchs?: string[];
  batchsListAll?: string[];

  position?: number;
  reviewedQty?: number;
  parentIdx?: number;
  parentId?: number;
  rawQty?: number;

  pricingType?: 'ONE_TIME_SPECIAL' | 'LIST_PRICE' | 'SALES_DEAL' | 'SAP_PRICE';
  priceType?: 'ONE_TIME_PRICE' | 'SALE_DEAL_PRICE' | 'LIST_PRICE' | 'SAP_PRICE'; // from server response
  remainOTPQty?: number;
  loadding?: boolean;

  isTransferred?: boolean;
  slocQtyTransferred?: number;

  productUPNInBoxReplace?: { upn?: string, name?: string, sdPrice?: number | null, priceObj?: any, isSingle?: boolean }[];
  batchInfos?: IAvailableBatch[];
  processingQty?: any;
  isSingle?: boolean;
  shelflifeAvailable?: number;
  shelflifeBatches?: string[];
  errors?: string[];
  totalAvailableBatch?: number;

  mrnCode?: string;
  mrnProcedureDate?: string | Date | number | null | undefined;
  mrnDoctorName?: string;
  expiryDate?: number | string;
  totalQtyByBatch?: number;
  errorTWNumProd?: boolean;
}

/** For test only */
export const createTestProductItem = (_id: number, childNumbers = 10) => {
  const _item: IProductItem = {
    id: _id,
    productName: 'Product Name Product 00-' + _id,
    productCode: 'pro-00-' + _id,
    productUPN: 'upn-00-' + _id,
    lotCode: 'lotCode-00-' + _id,
    lotName: 'lotName-00-' + _id,
    batchCode: 'batchCode_' + _id,
    qty: _.random(1, 10, false),
    multiply: _.random(),
    children: [],
    tempId: Date.now(),
    inventoryQty: _.random(2, 10, false),
    slocQty: 10 - _id
  }
  if (childNumbers) {
    for (let i = 0; i < 10; i++) {
      _item.children.push(createTestProductItem((i + 1) * 1000, 0))
    }
  }
  return _item;
}

export interface IFavoriteProduct {
  division: string;
  id: number;
  productName: string;
  productUPN: string;
}

export interface IInventoryQuantity {
  productPricingInfo: {
    listPrice: IPricingInfor | null;
    oneTime: IPricingInfor | null;
    saleDeal: IPricingInfor | null;
  };
  batchInfos: {
    batch: string,
    expiredDate: number,
    quantity: number
  }[]
  inventoryQty: number;
  productUPN: string;
  sdPrice: number;
  stdCost: number;
  shelflife: number;
  shelflifeDefault: number;
  shelflifeAvailable: number;
  shelflifeBatches?: string[];
  totalAvailableBatch: number;
}

export interface IPricingInfor {
  periodFrom: number | string | Date | undefined;
  preiodTo: number | string | Date | undefined;
  price: number;
  qty: number | null;
}

export interface ILevelInventoryItem {
  itemsLevel: ILevelPricingInfor[];
  level: string;
}

export interface ILevelPricingInfor {
  currentPrice: number;
  levelCode: string;
  levelName: string;
}

export interface IProductBatch {
  batchInfos: [];
  productUPN: string;
  productName: string;
  sdPrice: number;
  stdCost: number;
  productPricingInfo: any | null;
}

export interface IProductBatchV3 {
  expiredDate: number;
  sdPrice?: number;
  stdCost?: number;
  invQty: number;
  invQtyTransferred: number;
  isTransferred: boolean
  lotCode: string;
  lv4Code: string;
  lv4Name: string;
  nonMovingDays: number;
  productName: string;
  productUPN: string;
  shipOutDate: number;
  storageCode: string;
  productPricingInfo?: any | null;
}

export interface IBatchInfo {
  batchCode: string;
  batchName: string;
  slocQty: number;
  isTransferred: boolean;
  slocQtyTransferred: number;
  expiryDate: string | number | undefined;
}

export interface IProductSearchItem {
  createdAt: string | Date;
  createdBy: string;
  id: string;
  level1: IChildLevelProductSearchItem;
  level2: IChildLevelProductSearchItem;
  level3: IChildLevelProductSearchItem;
  level4: IChildLevelProductSearchItem;
  level5: IChildLevelProductSearchItem;
  product: IChildProductSearchItem;
  recordStatus: IChildProductSearchItem
  updatedAt: string | Date;
  tempCode: string;
  tempCodeFullRaw: string;
  tempCodeFull: string;
  soldToCode: string;
  soldToName: string;
  children: IProductSearchItem[];
  select: boolean;
  expand: boolean;
  level3CodeName: string;
  level4CodeName: string;
  level5CodeName: string;
  productCodeName: string;

  discountPercentage: number | null;
  discountReason: { code: string, name: string }
  level4Code: string;
  level4Name: string;
  level5Code: string;
  level5Name: string;
  newPrice: number | null;
  productName: string;
  productUPN: string;
  quantity: number;
  sdPrice: number | null;
  netPrice: number | null;
  stdCost: number;
  unitPrice: number;
  priceObj: any | null;

  listPrice: number | null;

  extraData?: any;
  errorEmpty?: boolean;
  errorEmptyFirst?: boolean;

  visibleNewPrice?: boolean;
  visibleDiscount?: boolean;
  isConfirmApply?: string;

  divisionUser?: string;
  isNew?: boolean;
}

export interface IChildLevelProductSearchItem {
  code: string;
  createdAt: string | Date;
  createdBy: string | Date;
  id: string;
  name: string;
  recordStatus: string;
  updatedAt: string | Date;
}
export interface IChildProductSearchItem {
  code: string;
  createdAt: string | Date;
  createdBy: string | Date;
  id: string;
  name: string;
  recordStatus: string;
  updatedAt: string | Date;

  productDescription: string | null;
  productGTIN: string;
  productName: string;
  productStdCost: number | null;
  productTotalPieces: number | null;
  productUPN: string;
  qty: number;
  updatedBy: string;

}

export interface IElasticSearchItem {
  content: any;
  explanation: any;
  highlightFields: any;
  id: string;
  index: string;
  innerHits: any;
  matchedQueries: any[];
  nestedMetaData: any;
  routing: string;
  score: number;
}


export interface IBundleItem {
  bundleCode: string;
  bundleId: number;
  bundleName: string;
  bundlePrice: number;
  bundleQuantity: number;
  details: IBundleProductItem[];
  expand?: boolean;
  bundleTotalPrice: number;
  bundleItemsPriceZero?: boolean;
  bundleIndex?: number;
}
export interface IBundleProductItem {
  lotCode: string;
  batchCode?: string;
  quantity: number;
  tprice: number;
  productUPN: string;
  productName?: string;
  uprice: number;
  stdCost?: number | null;
  ustdCost?: number | null;
  tempCode?: string | null;
  orderItem?: any;
  orderItemList?: any[];
  errorReason?: boolean;
  reason?: string;
  reasonObject?: any;
  changeReason?: string;
  newPrice?: number | null | string;

  remark?: string;

  visibleUI?: any;
  tempId?: number;

  total: number;
  slocQty?: number;
  totalQtyByBatch?: number;
  twNumberProduct?: string;
  errorTWNumProd?: boolean;
  itemIndex?: number;
}

export interface IProductsFromSAP {
  currency?: string;
  netPrice?: number
  productUpn?: string;
  quantity?: string;
  unit?: string;
}

export interface IProductsFromSAP {
  currency?: string;
  netPrice?: number
  productUpn?: string;
  quantity?: string;
  unit?: string;
}
