import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import ApolloSettings from "../src/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSettings>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSettings>
  );
}
