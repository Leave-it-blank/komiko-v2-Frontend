import Link from "next/link";
import Image from "next/image";
import { dateFromNow } from "../../../utils/dates";
type CardTYPE = {
  comic: {
    comic_id: number;
    ch_number: number;
    vol_number: number;
    comic_title: string;
    comic_isMature: boolean;
    comic_type: string;
    comic_choice: string;
    comic_thumb: string;

    // Latest Home page specific
    comic_isLocked?: boolean;
    ch_name?: string;
    comic_viewUrl?: string;
    ch_viewUrl?: string;
    comic_titleslug?: string;
    comic_createdAt?: string;
    comic_updatedAt?: string;

    // Latest Release page specific
    ch_id?: number;
    ch_created_at?: string;
    vol_id?: number;
    vol_created_at?: string;
    comic_titleSlug?: string;
    comic_status?: string;
  };
};
function HorComicCard({ comic }: CardTYPE) {
  return (
    <div className="m-2 grow flex justify-center ">
      <div className="px-2 py-1 h-content bg-sky-400 dark:bg-neutral-900 w-content rounded-xl w-full">
        <div className="flex  rounded-md w-full">
          <div className="flex flex-row rounded-md w-full">
            <Link
              href={
                "/comics/" +
                (comic.comic_titleslug
                  ? comic.comic_titleslug
                  : comic.comic_titleSlug
                  ? comic.comic_titleSlug
                  : "comic") +
                "/volume/" +
                comic.vol_number +
                "/chapter/" +
                comic.ch_number
              }
            >
              <div className="relative backdrop:bg-yellow-400">
                <div className="select-none mx-auto flex flex-1 justify-center rounded-xl  h-36 w-24">
                  {" "}
                  <Image
                    className="rounded-xl  object-fit overflow-hidden  h-36 min-w-full w-24 select-none"
                    alt={
                      comic.comic_titleslug
                        ? comic.comic_titleslug
                        : comic.comic_titleSlug
                        ? comic.comic_titleSlug
                        : "comic"
                    }
                    sizes="13vw"
                    src={comic.comic_thumb}
                    width="500"
                    height="715"
                    priority={true}
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* <div className="absolute top-1 left-1 right-0 text-md md:text-sm font-bold font-catamaran w-fit pr-2 max-w-2/3 ml-1 md:ml-0 text-gray-100 bg-sky-300 dark:bg-sky-500 opacity-95 mt-1 capitalize text-left select-none cursor-pointer flex justify-center items-center flex-0 rounded-md">
                  <div className="mt-1 px-2 py-1">
                    {"  " + comic.comic_choice}
                  </div>
                </div> */}
              </div>
            </Link>
            <div className="justify-end   px-3  w-full relative">
              <div className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-600  text-sm  w-full  ">
                <Link
                  href={
                    "/comics/" +
                    (comic.comic_titleslug
                      ? comic.comic_titleslug
                      : comic.comic_titleSlug
                      ? comic.comic_titleSlug
                      : "comic")
                  }
                  className=" min-h-5 w-full  text-md sm:text-sm line-clamp-3   text-left select-none cursor-pointer  flex-none   text-white flex-0    hover:text-black  dark:hover:text-sky-500 font-bold"
                >
                  {comic.comic_title}
                </Link>
                <div className="absolute bottom-1  right-1 min-h-3 w-full text-xs font-medium text-right select-none cursor-pointer   line-clamp-2 md:line-clamp-1 flex-0">
                  {dateFromNow(
                    comic.comic_updatedAt
                      ? comic.comic_updatedAt
                      : comic.ch_created_at
                      ? comic.ch_created_at
                      : "2021-01-01"
                  )}
                </div>
                <Link
                  href={
                    "/comics/" +
                    (comic.comic_titleslug
                      ? comic.comic_titleslug
                      : comic.comic_titleSlug
                      ? comic.comic_titleSlug
                      : "comic") +
                    "/volume/" +
                    comic.vol_number +
                    "/chapter/" +
                    comic.ch_number
                  }
                  className="absolute bottom-6 left-0  mx-4 md:mx-1 px-3 "
                >
                  <div className=" shrink-1 py-1 opacity-80 text-sm md:text-sm font-semibold mt-2 font-roboto capitalize text-sky-600  dark:text-sky-400 text-center select-none cursor-pointer line-clamp-2     border-sky-700  border-2 bg-white dark:bg-black rounded-md w-fit px-3">
                    <p>
                      {"vol " +
                        comic.vol_number +
                        " chapters " +
                        comic.ch_number}{" "}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorComicCard;
