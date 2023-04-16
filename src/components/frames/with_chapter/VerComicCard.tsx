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
function VerComicCard({ comic }: CardTYPE) {
  return (
    <div className="m-2 grow flex justify-center">
      <div className="px-2 py-1 h-content bg-transparent w-content">
        <div className="flex flex-shrink rounded-md">
          <div className="flex flex-col rounded-md">
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
                <div className="select-none mx-auto flex flex-1 justify-center rounded-xl sm:h-72 sm:w-48">
                  {" "}
                  <Image
                    className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none"
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
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* <div className="absolute top-1 left-1 right-0 text-md md:text-sm font-bold font-catamaran w-fit pr-2 max-w-2/3 ml-1 md:ml-0 text-gray-100 bg-sky-300 dark:bg-sky-500 opacity-95 mt-1 capitalize text-left select-none cursor-pointer flex justify-center items-center flex-0 rounded-md">
                  <div className="mt-1 px-2 py-1">
                    {"  " + comic.comic_choice}
                  </div>
                </div> */}

                <div className="absolute bottom-0 left-0 right-0 sm:px-4 p-1 sm:py-2 flex justify-start md:justify-center">
                  <div className=" shrink-1 py-1 opacity-80 text-sm md:text-sm font-semibold mt-2 font-roboto capitalize text-sky-600  dark:text-sky-400 text-center select-none cursor-pointer line-clamp-2     border-sky-700  border-2 bg-white dark:bg-black rounded-md w-fit px-3">
                    <p>
                      {"vol " +
                        comic.vol_number +
                        " chapters " +
                        comic.ch_number}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="justify-end flex-none ">
              <div className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-600 sm:w-48">
                <Link
                  href={
                    "/comics/" +
                    (comic.comic_titleslug
                      ? comic.comic_titleslug
                      : comic.comic_titleSlug
                      ? comic.comic_titleSlug
                      : "comic")
                  }
                  className=" min-h-5 text-md md:text-sm  line-clamp-3 text-left select-none cursor-pointer  flex-none  text-sky-500 dark:text-white flex-0  w-full hover:text-black dark:hover:text-sky-500 font-bold"
                >
                  {comic.comic_title}
                </Link>
                <div className="min-h-3 w-full text-xs font-medium text-left select-none cursor-pointer flex-none line-clamp-2 md:line-clamp-1 flex-0">
                  {dateFromNow(
                    comic.comic_updatedAt
                      ? comic.comic_updatedAt
                      : comic.ch_created_at
                      ? comic.ch_created_at
                      : "2021-01-01"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerComicCard;
