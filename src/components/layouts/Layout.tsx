import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "./Footer";
import DeskTopNavBar from "./DeskTopNavBar";
import MobileNavBar from "./MobileNavBar";
import DarkModeToggle from "./DarkModeToggle";
import Adsense from "../essentials/Adsense";

function Layout(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const title = `HomePage - ${process.env.NEXT_PUBLIC_SITE_NAME}`;
  return (
    <div className="relative">
      <Head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUB}`}
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <title>{title}</title>
        <meta
          name="description"
          content={` ${process.env.NEXT_PUBLIC_SITE_NAME}: HomePage, A place to read manga, manhua and manwha for free of cost.`}
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="comics, manga, manhua, manwha, novel, adaptaion, scanlation, action_manga, manhua"
        />
        <meta
          property="og:title"
          content="HomePage, where you can read comics for free."
        />
        <meta
          property="og:description"
          content={` ${process.env.NEXT_PUBLIC_SITE_NAME}: HomePage, A place to read manga, manhua and manwha for free of cost.`}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG}`}
        />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONTEND_URL}`}
        />

        <meta
          name="twitter:title"
          content={`${process.env.NEXT_PUBLIC_SITE_NAME} : HomePage, where you can read comics for free.`}
        />
        <meta
          name="twitter:description"
          content="webcomics: HomePage, A place to read manga, manhua and manwha for free of cost."
        />
      </Head>
      <DeskTopNavBar />
      <div
        id="ads_global_nav_1 "
        className="mx-auto container max-w-screen-xl max-h-20  md:pl-20 xl:hidden"
      >
        <Adsense
          style={{ display: "block" }}
          dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
          dataAdSlot={process.env.NEXT_PUBLIC_ADS_LAYOUT_SLOT_1}
          dataAdFormat={"auto"}
          dataFullWidthResponsive={true}
        />
      </div>
      <main>{props.children}</main>
      <Footer />
      <MobileNavBar />
      <div
        className="fixed  top-6 md:left-2 left-12 -translate-x-10 md:translate-x-0 flex w-full justify-between flex-row items-center "
        id="logo_web"
      >
        {" "}
        <Image
          className="rounded-md cursor-pointer  -translate-y-2"
          width={80}
          quality={100}
          height={10}
          src="/logo.jpg"
          alt="lynxscans"
        />{" "}
        <div className=" -translate-x-7 translate-y-2">
          <DarkModeToggle />
        </div>
      </div>
      <div
        id="ads_global_nav_2"
        className="mx-auto container max-w-screen-xl max-h-20 md:pl-20 py-2"
      >
        <Adsense
          style={{ display: "block" }}
          dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
          dataAdSlot={process.env.NEXT_PUBLIC_ADS_LAYOUT_SLOT_2}
          dataAdFormat={"auto"}
          dataFullWidthResponsive={true}
        />
      </div>
      <div className="mb-10"></div>
    </div>
  );
}

export default Layout;
