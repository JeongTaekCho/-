import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import ProductListUi from "./list.presenter";
import { FETCH_USED_ITEMS } from "./list.queries";

const ProductList = () => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const infiniteFun = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return <ProductListUi data={data} infiniteFun={infiniteFun} />;
};

export default ProductList;
