export interface IGlobalKeys {
  [key: string]: any;
}

export interface ICommonSearch {
  id?: number;
  code: string;
  name: string;
  legalCode?: string;
  [key: string]: any;
}

export interface IExportExtractInfoBody {
  excelTitle: string,
  exportBy: string,
  generatedByTitle: string,
  reportDate: string,
  reportDateTitle: string,
  tableHeader: {
    field: string,
    title: string,
    translateTitle?: boolean;
  }[];
  summaryHeader: {
    field: string,
    title: string,
    translateTitle?: boolean;
  }[];

  [field: string]: any;
}

export interface IFileResponse {
  extension: string;
  name: string;
  url: string;
  key: string;

  shortName?: string;
}
export interface IAvailableBatch {
  batch: string,
  quantity: number,
  expiredDate: number
};
