import { environment } from "src/environments/environment";

export const excelColor = {
  title: '003366',
  header: '0000FF',
  default: '000000'
}

export const typeFieldForExport = {
  text: 'text',
  status: 'status',
  date: 'date',
  dateTime: 'dateTime',
  codeNameJoin: 'codeNameJoin',
  discount: 'discount',
  translate: 'translate'
};

export const exportType = [
  {
    type: typeFieldForExport.text,
    listField: [],
  },
  {
    type: typeFieldForExport.status,
    listField: ['pcaStatus', 'transferUubStatus'],
  },
  {
    type: typeFieldForExport.date,
    format: environment.SETTING_FORMAT.localFormat.date,
    listField: ['usageDate'],
  },
  {
    type: typeFieldForExport.dateTime,
    format: environment.SETTING_FORMAT.localFormat.dateTime,
    listField: ['submittedAt'],
  },
  {
    type: typeFieldForExport.codeNameJoin,
    listField: ['level2', 'level5', 'sloc', 'soldTo', 'shipTo'],
  },
  {
    type: typeFieldForExport.discount,
    listField: ['discountReason', 'changeReason'],
  },
  {
    type: typeFieldForExport.translate,
    listField: ['billName'],
  }
];
