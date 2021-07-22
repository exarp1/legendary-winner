import NProgress from "nprogress";
import { AppProps } from "next/app";
import Page from "../components/Page";
import Router from "next/router";
import "../components/styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
