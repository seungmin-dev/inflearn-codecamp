import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import ApolloSettings from "../src/commons/apollo";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSettings>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSettings>
    </RecoilRoot>
  );
}
