export interface ICriteriaSet {
  _id?: string;
  name?: string;
  category?: string;
  priceMaster?: number;
  sortOrder?: number;
  referenceIndex?: string;
}

export interface ICriteriaSetInputDTO {
  _id?: string;
  name?: string;
  criteriaSet?: string[];
}
