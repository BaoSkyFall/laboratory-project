import { BaseSearch } from "@shared/models/base-search";
import { CriteriaItem } from "../criteria/criteria.model";


export class CriteriaSetItem {
  _id?: string;

  name: string;
  criteriaList: CriteriaItem[];
  createdAt: string;
  checked?: boolean;
  expand?: boolean;
}


