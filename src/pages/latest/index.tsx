import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { LATEST_APITYPE } from "@/utils/types";
import Head from "next/head";
import { getLatestPage } from "../../utils/api";

import NewReleases from "../../components/latest/NewReleases";
import TopComics from "@/components/home/TopComics";
import { request } from "http";
import Pagination from "../../components/essentials/Pagination";

const inter = Inter({ subsets: ["latin"] });

//className={`${inter.className} mb-3 text-2xl font-semibold`}

export default function Latest({ chapters }: LATEST_APITYPE) {
  return (
    <div className={`mx-auto`}>
            <Head>
      <title> Comics - ${process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      <div className="pt-10"> </div>
      <div className="max-w-screen-2xl flex  flex-col mx-auto">
        <div className="flex flex-col my-2 mx-auto">
          <div className="min-h-screen">
            <NewReleases chapters={chapters["data"]} />
          </div>

          <div className="mx-auto flex justify-center md:justify-start mt-3 px-3">
            {<Pagination links={chapters["links"]} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { chapters } = await getLatestPage(context.query);
  return {
    props: {
      chapters: chapters,
    },
  };
}
