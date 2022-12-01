import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "../src/commons/styles/globalStyle";
import ApolloSetting from "../src/components/apollo";
import Layout from "../src/components/layout";

export default function App({ Component, pageProps }: any) {
  return (
    <ApolloSetting>
      <RecoilRoot>
        <Layout>
          <>
            <Global styles={GlobalStyles} />
            <Component {...pageProps} />
          </>
        </Layout>
      </RecoilRoot>
    </ApolloSetting>
  );
}
