import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import ProductListUi from "./list.presenter";
import { FETCH_USED_ITEMS } from "./list.queries";

const ProductList = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data);

  return <ProductListUi data={data} />;
};

export default ProductList;
