import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { HOMEPAGE_APITYPE } from "@/utils/types";
import { getHomePage } from "../utils/api";
import NewRelease from "../components/home/NewRelease";
import TopComics from "@/components/home/TopComics";

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
