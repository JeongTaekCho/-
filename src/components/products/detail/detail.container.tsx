import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../list/list.queries";
import ProductDetailUi from "./detail.presenter";
import { FETCH_USED_ITEM } from "./detail.queries";

const ProductDetail = () => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  const { data: bestProducts } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const bestProductList = bestProducts?.fetchUseditems.slice(0, 6);

  console.log(bestProductList);

  return <ProductDetailUi data={data} bestProductList={bestProductList} />;
};

export default ProductDetail;
