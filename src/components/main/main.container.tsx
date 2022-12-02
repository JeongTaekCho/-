import { useQuery } from "@apollo/client";
import { IQuery } from "../../commons/types/generated/types";
import MainUi from "./main.presenter";
import { FETCH_BEST_ITEMS } from "./main.queries";

const Main = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_BEST_ITEMS);

  console.log(data);

  return <MainUi data={data} />;
};

export default Main;
