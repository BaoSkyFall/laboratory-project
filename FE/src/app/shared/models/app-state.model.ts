import { AccountInfoModel } from "./account-info.model";
import { CompanyInfoModel } from "./company-info.model";
import { ProductTicketSearchModel } from "./product-ticket-search.model";

export interface AppState {
  readonly isCollapse: boolean;
  readonly accountInfo: AccountInfoModel;
  readonly companyInfo: CompanyInfoModel;
  readonly searchProductTicketModel: ProductTicketSearchModel;
  readonly monthCardStatus: string;
}
