import { COMICS_APITYPE } from "@/utils/types";
import { getComicsPage } from "../../utils/api";

import NewReleases from "../../components/latest/NewReleases";

import Pagination from "../../components/essentials/Pagination";
import ComicsList from "../../components/comics/ComicsList";
export default function Comics({ comics }: COMICS_APITYPE) {
  return (
    <div className={`mx-auto`}>
      <div className="pt-10"> </div>
      <div className="max-w-screen-2xl flex  flex-col mx-auto ">
        <div className="flex flex-col my-2 mx-auto">
          <div className="min-h-screen">
            <ComicsList chapters={comics["data"]} />
          </div>

          <div className="mx-auto flex justify-center md:justify-start mt-3 px-3">
            {<Pagination links={comics["links"]} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { comics } = await getComicsPage(context.query);
  return {
    props: {
      comics: comics,
    },
  };
}