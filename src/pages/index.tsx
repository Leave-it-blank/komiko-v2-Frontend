import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { HOMEPAGE_APITYPE } from "@/utils/types";
import { getHomePage } from "../utils/api";
import NewRelease from "../components/home/NewRelease";
import TopComics from "@/components/home/TopComics";
import Support from "@/components/layouts/Support";
import { loadDisque } from "@/utils/disque";

const inter = Inter({ subsets: ["latin"] });

//className={`${inter.className} mb-3 text-2xl font-semibold`}

export default function Home({
  latest,
  recommended,
  slider,
  ads,
}: HOMEPAGE_APITYPE) {
  return (
    <div className={`mx-auto`}>
      <div className="pt-10"> </div>
      <div className="max-w-screen-2xl flex  flex-col mx-auto min-h-screen">
        <div className="flex flex-col my-2 mx-auto">
          <NewRelease latest={latest} />
        </div>
        <div className="flex flex-col my-2 mx-auto">
          <TopComics recommended={recommended} />
        </div>

        <div className="flex flex-col my-2 mx-auto w-full">
          <div className="md:pl-20 w-full">
            <div className="py-3 w-full ">
              <div className="rounded-xl">
                <button
                  id="disq_load"
                  onClick={() => {
                    loadDisque(
                      "komikoHome",
                      "https://komiko.leaveitblank.co/",
                      "testsite-q2cy98osnk"
                    );
                  }}
                  className="py-2 bg-sky-500 dark:bg-neutral-900 text-white rounded-lg center w-full hover:bg-sky-700"
                >
                  Click to View Comment
                </button>

                <div
                  id="disqus_thread"
                  className="text-sky-300 bg-sky-200 dark:bg-neutral-900 dark:text-sky-300 px-3 rounded-lg"
                ></div>
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
