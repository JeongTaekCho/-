import { IQuery } from "../../../commons/types/generated/types";

export interface IProductListUiProps {
  data?: Pick<IQuery, "fetchUseditems">;
  infiniteFun: () => void;
}
