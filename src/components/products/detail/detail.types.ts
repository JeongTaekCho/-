import { IQuery } from "../../../commons/types/generated/types";

export interface IProductDetailUiProps {
  data?: Pick<IQuery, "fetchUseditem">;
  bestProductList: any;
}
