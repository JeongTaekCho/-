import { Header } from "./Header/header.container";

interface IProps {
  children: JSX.Element;
}

export const Layout = (props: IProps) => {
  return (
    <>
      <Header />
      <>{props.children}</>
    </>
  );
};

export default Layout;
