import "@/styles/globals.css";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/font-awesome.css";
import "@/styles/css/ntfs.css";
import "@/styles/css/responsive.css";
import "@/styles/css/shortcodes.css";
import "@/styles/css/style.css";
import "@/styles/css/textanimation.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
