export interface ICriteria {
  _id?: string;
  name?: string;
  category?: string;
  priceMaster?: number;
  sortOrder?: number;

}

export interface ICriteriaInputDTO {
  _id?: string;
  name?: string;
  category?: string;
  priceMaster?: number;
  sortOrder?: number;
}
