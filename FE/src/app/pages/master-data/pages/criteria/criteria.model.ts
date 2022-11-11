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
  newPrice: number | null;
  categoryName?: string;
  sortOrder: number;
  referenceIndex?: string;
  qty?: number | undefined;
  createdAt: string;
}

export class CategoryItem {
  _id?: string;
  code: string;
  name: string;
  createdAt: string;

}
