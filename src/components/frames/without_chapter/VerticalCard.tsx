import Link from "next/link";
import Image from "next/image";
import { dateFromNow } from "../../../utils/dates";
type CardTYPE = {
  comic: {
    comic_id: number;
    comic_title: string;
    comic_viewUrl: string;
    comic_titleslug: string;
    comic_isMature: boolean;
    comic_isLocked: boolean;
    comic_createdAt: string;
    comic_updatedAt: string;
    comic_type: string;
    comic_choice: string;
    comic_thumb: string;
    ch_count: number;
  };
};

function VerticalCard({ comic }: CardTYPE) {
  return (
    <div className="m-2 grow flex justify-center">
      <Link href={"/comics/" + comic.comic_titleslug}>
        <div className="px-2 py-1 h-content bg-transparent">
          <div className="flex flex-shrink rounded-md">
            <div className="flex flex-col rounded-md">
              <div className="relative">
                <div className="select-none mx-auto flex flex-1 justify-center rounded-xl sm:h-72 sm:w-48">
                  <Image
                    className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none"
                    alt={comic.comic_titleslug}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    sizes="13vw"
                    src={comic.comic_thumb}
                    width="500"
                    height="715"
                  />
                </div>
                {/* <div className="absolute top-1 left-1 right-0 text-md md:text-sm font-bold font-catamaran w-fit pr-2 max-w-2/3 ml-1 md:ml-0 text-gray-100 bg-sky-300 dark:bg-sky-500 opacity-95 mt-1 capitalize text-left select-none cursor-pointer flex items-center justify-center flex-0 rounded-md">
                  <div className="mt-1 px-2 py-1">
                    {"  " + comic.comic_choice}
                  </div>
                </div> */}

                <div v-if="comic.chapter_count !== 0 && comic.volume_count !== 1">
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 flex justify-start md:justify-center">
                    <div className=" shrink-1 py-1 opacity-80 text-sm md:text-sm font-semibold mt-2 font-roboto capitalize text-sky-600  dark:text-sky-400 text-center select-none cursor-pointer line-clamp-2     border-sky-700  border-2 bg-white dark:bg-black rounded-md w-fit px-3">
                      <p> {comic.ch_count + " Chapters "}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-end flex-none">
                <div className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-600 sm:w-48">
                  <div className="min-h-5 w-full text-xl md:text-md   text-left select-none cursor-pointer text-sky-500 flex-none flex-0 dark:text-white   hover:text-black dark:hover:text-sky-500 font-bold">
                    {comic.comic_title}
                  </div>

                  <div className=" min-h-3 w-full text-sm font-medium text-left select-none cursor-pointer flex-none line-clamp-2 md:line-clamp-1 flex-0">
                    {dateFromNow(comic.comic_updatedAt)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VerticalCard;
