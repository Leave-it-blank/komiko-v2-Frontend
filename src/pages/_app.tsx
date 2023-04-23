import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import NextProgress from "@approximant/next-progress";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUB}`}
      />
      <NextProgress
        debounce={250}
        color="#29D"
        startPosition={0.3}
        stopDelayMs={150}
        height={3}
        showOnShallow={true}
      />{" "}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
