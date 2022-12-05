import Footer from "./Footer/footer.container";
import { Header } from "./Header/header.container";

interface IProps {
  children: JSX.Element;
}

export const Layout = (props: IProps) => {
  return (
    <>
      <Header />
      <>{props.children}</>
      <Footer />
    </>
  );
};

export default Layout;
