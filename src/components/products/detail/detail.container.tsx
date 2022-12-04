import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";
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

  console.log(data);

  return <ProductDetailUi data={data} />;
};

export default ProductDetail;
