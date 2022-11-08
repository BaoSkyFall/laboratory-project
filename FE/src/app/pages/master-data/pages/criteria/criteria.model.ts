import { BaseSearch } from "@shared/models/base-search";


export class CriteriaItem {
  _id?: string;
  code: string;
  name: string;
  category: {
    _id: string;
    name: string;
    code: string;
  }
  priceMaster: number;
  categoryName?: string;
  sortOrder: number;
  referenceIndex?: string;
  createdAt: string;
}

export class CategoryItem {
  _id?: string;
  code: string;
  name: string;
  createdAt: string;

}
