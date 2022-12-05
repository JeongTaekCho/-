import { useRouter } from "next/router";
import HeaderUi from "./header.presenter";

export const Header = () => {
  const router = useRouter();

  const onClickToProducts = () => {
    void router.push("/products/list");
  };
  const onClickToComunity = () => {
    void router.push("/products/comunity");
  };
  const onClickToMain = () => {
    void router.push("/");
  };

  return (
    <HeaderUi
      onClickToProducts={onClickToProducts}
      onClickToComunity={onClickToComunity}
      onClickToMain={onClickToMain}
    />
  );
};
