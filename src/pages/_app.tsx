import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import NextProgress from '@approximant/next-progress';

export default function App({ Component, pageProps }: AppProps) {
  return (<><NextProgress 
    debounce={250}
    color="#29D"
    startPosition={0.3}
    stopDelayMs={150}
    height={3}
    showOnShallow={true}  
    /> <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
   
  );
}
