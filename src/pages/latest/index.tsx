import { LATEST_APITYPE } from "@/utils/types";
import Head from "next/head";
import { getLatestPage } from "../../utils/api";
import NewReleases from "../../components/latest/NewReleases";
import Pagination from "../../components/essentials/Pagination";
import Adsense from "@/components/essentials/Adsense";

export default function Latest({ chapters }: LATEST_APITYPE) {
  const title = `Releases - ${process.env.NEXT_PUBLIC_SITE_NAME}`;
  return (
    <div className={`mx-auto`}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="pt-10"> </div>
      <div className="max-w-screen-2xl flex  flex-col mx-auto">
        <div className="flex flex-col my-2 mx-auto">
          <div className="ads px-4 md:pl-20" id="Bookmark_ads_aboveLatest">
            <Adsense
              style={{ display: "block" }}
              dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
              dataAdSlot={process.env.NEXT_PUBLIC_ADS_HOME_SLOT_1}
              dataAdFormat={"auto"}
              dataFullWidthResponsive={true}
            />
          </div>
          <div className="min-h-screen">
            <NewReleases chapters={chapters["data"]} />
          </div>
          <div className="ads px-4 md:pl-20" id="Latest_ads_aboveLatest">
            <Adsense
              style={{ display: "block" }}
              dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
              dataAdSlot={process.env.NEXT_PUBLIC_ADS_LATEST_SLOT_2}
              dataAdFormat={"auto"}
              dataFullWidthResponsive={true}
            />
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
