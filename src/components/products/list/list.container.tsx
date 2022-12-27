import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import ProductListUi from "./list.presenter";
import { FETCH_USED_ITEMS } from "./list.queries";

const ProductList = () => {
  const router = useRouter();

  const onClickToWrite = () => {
    void router.push("/products/write");
  };

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const infiniteFun = () => {
    if (data === undefined) return;
    if (data.fetchUseditems.length > 8) {
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
    }
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    refetch({
      search: event.target.value,
    });
  };

  return (
    <ProductListUi
      data={data}
      infiniteFun={infiniteFun}
      onClickToWrite={onClickToWrite}
      onChangeSearch={onChangeSearch}
    />
  );
};

export default ProductList;
