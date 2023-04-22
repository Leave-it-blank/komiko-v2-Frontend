import React, { useEffect } from "react";
import Head from "next/head";
declare global {
  interface Window {
    adsbygoogle: any;
  }
}
const Adsense = ({
  style,
  dataAdClient,
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive = false,
}: any) => {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle;
        console.log({ adsbygoogle });
        adsbygoogle.push({});
      } catch (e) {
        console.error(e);
      }
    };

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd();
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return ( <>
  <Head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4705209099510077"
     crossOrigin="anonymous"></script>
  </Head>

   <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={dataAdClient}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive}
    ></ins>
  </>
   
  );
};

export default Adsense;
