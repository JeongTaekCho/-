import { Header } from "antd/es/layout/layout";

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
