import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../commons/types/generated/types";
import MainUi from "./main.presenter";
import { FETCH_BEST_ITEMS } from "./main.queries";

const Main = () => {
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_BEST_ITEMS);

  const onClickToProducts = () => {
    void router.push("/products/list");
  };

  return <MainUi data={data} onClickToProducts={onClickToProducts} />;
};

export default Main;
