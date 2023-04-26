import Image from "next/image";

import { HOMEPAGE_APITYPE } from "@/utils/types";
import { getHomePage } from "../utils/api";
import NewRelease from "../components/home/NewRelease";
import TopComics from "@/components/home/TopComics";
import Support from "@/components/layouts/Support";
import { loadDisque } from "@/utils/disque";
import { useEffect } from "react";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import Adsense from "@/components/essentials/Adsense";

export default function Home({
  latest,
  recommended,
  slider,
  ads,
}: HOMEPAGE_APITYPE) {
  const disq = `${process.env.NEXT_PUBLIC_COMMENT_DISQ}` ?? "mysite";
  useEffect(() => {});
  return (
    <div className={`mx-auto`}>
      <div className="pt-10"> </div>
      <div className="max-w-screen-2xl flex  flex-col mx-auto min-h-screen">
        <div className="flex flex-col my-2 mx-auto">
          <NewRelease latest={latest} />
        </div>
        <div
          className="ads md:pl-20 px-4   my-2 max-auto "
          id="home_ads_aboveRecommend"
        >
          <Adsense
            style={{ display: "block" }}
            dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
            dataAdSlot={process.env.NEXT_PUBLIC_ADS_HOME_SLOT_1}
            dataAdFormat={"auto"}
            dataFullWidthResponsive={true}
          />
        </div>
        <div
          className="ads md:pl-20 px-4  my-2 mx-auto "
          id="home_ads_aboveLatest"
        >
          <Adsense
            style={{ display: "block" }}
            dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
            dataAdSlot={process.env.NEXT_PUBLIC_ADS_HOME_SLOT_2}
            dataAdFormat={"auto"}
            dataFullWidthResponsive={true}
          />
        </div>
        <div className="flex flex-col my-2 mx-auto">
          <TopComics recommended={recommended} />
        </div>
        <div
          className="ads md:pl-20 px-4 my-2 mx-auto"
          id="home_ads_aboveDiscord"
        >
          <Adsense
            style={{ display: "block" }}
            dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
            dataAdSlot={process.env.NEXT_PUBLIC_ADS_HOME_SLOT_3}
            dataAdFormat={"auto"}
            dataFullWidthResponsive={true}
          />
        </div>
        <div className="flex flex-col my-2 mx-auto w-full ">
          <div className="md:pl-20 w-full">
            <div className="py-3 w-full ">
              <div className="rounded-xl   px-5 bg-sky-400 dark:bg-neutral-900  py-4 text-sky-700  ">
                <div className="flex flex-row justify-between items-center p-4">
                  <h3 className="text-xl font-roboto p-1   w-1/2 text-left max-w-md   font-bold  text-sky-900 dark:text-gray-100">
                    {"Comment Section"}
                  </h3>
                  <h4 className="px-4 dark:text-white text-sky-900 py-2">
                    <CommentCount
                      shortname={disq}
                      config={{
                        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/`,
                        identifier: "komikoHome",
                        title: "HomePage Komiko",
                      }}
                    >
                      {/* Placeholder Text */}
                      Loading.. Comments..
                    </CommentCount>
                  </h4>
                </div>

                <DiscussionEmbed
                  shortname={disq}
                  config={{
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/`,
                    identifier: "komikoHome",
                    title: "HomePage Komiko",
                    language: "en", //e.g. for Traditional Chinese (Taiwan)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-20 ">
          <Support />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { latest, recommended, slider, ads } = await getHomePage();
  return {
    props: {
      latest: latest,
      recommended: recommended,
      slider: slider,
      ads: ads,
    },
    revalidate: 10,
  };
}
