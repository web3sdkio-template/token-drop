import React from "react";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import Head from "next/head";
import Web3sdkioGuideFooter from "../components/guide/Web3sdkioGuideFooter";
import "../styles/globals.css";
import { AppProps } from "next/app";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdkio Token Drop Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdkio Example Repository to Showcase the token drop contract, including claim and transfer features."
        />
        <meta
          name="keywords"
          content="web3sdkio token drop, web3sdkio token transfer, web3sdkio token claim, web3sdkio token claim phases"
        />
      </Head>
      <Component {...pageProps} />
      <Web3sdkioGuideFooter />
    </Web3sdkioProvider>
  );
}

export default MyApp;
