// import { IApiBaseMeta } from "@cores/interfaces";

export interface ITableElement {
  field: string;
  title: string;

  fieldType?:
  "text" | "dateTime" | "date" | "number" | "float" | "statusType" | "checkbox" | "select"; // plain text, date time, date, number, price

  child?: ITableElement[];
  index?: number;
  sortField?: string;
  get?: Function;
  colSpan?: number;
  rowSpan?: number;
  translateTitle?: boolean;
  width?: number | string | null;
  align?: 'center' | 'right' | 'left';
  padding?: string;

  isUnix?: boolean;

  value?: any;
  show?: boolean;
  notAllowHide?: boolean;
  showCCOrAdmin?: boolean;
  showBum?: boolean;
  sortOrder?: string;
  isHide?: boolean;
  isLock?: boolean;
  country?: string;
}

export interface ITableLayoutProps {
  data?: any[];
  expandFilter?: boolean;
  showExpand?: boolean;
  showReset?: boolean;
  showRefresh?: boolean;
  showExportExcel?: boolean;
  showDefaultButtons?: boolean;
  showSummarize?: boolean;
  showPagination?: boolean;
  minWidth?: number;
  maxHeight?: string;
  no_data_msg?: string;
  showTable?: boolean;
  // param?: IApiBaseMeta;
  alertReset?: boolean;
  nzWidthConfig?: string[];
  nzPageSizeOptions?: number[];
}
