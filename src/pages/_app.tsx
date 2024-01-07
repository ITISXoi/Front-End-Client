import "@/assets/css/style.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Rubik, Urbanist } from "next/font/google";
import Head from "next/head";
import { ReactElement, ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import "@rainbow-me/rainbowkit/styles.css";
import Web3Provider from "@/utils/web3/Web3Provider";

// Client-side cache, shared for the whole session of the user in the browser.

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const queryClientOption = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--rubik-font",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--urbanist-font",
});

function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient(queryClientOption));
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={`body ${rubik.className} ${urbanist.className}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Web3Provider>{getLayout(<Component {...pageProps} />)}</Web3Provider>
        </Hydrate>
      </QueryClientProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
export default App;
