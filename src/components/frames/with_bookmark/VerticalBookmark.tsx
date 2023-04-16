import Link from "next/link";
import Image from "next/image";
import { dateFromNow } from "../../../utils/dates";
type CardTYPE = {
  comic: {
    title: string;
    created_at: string;
    url: string;
    thumb: string;
  };
  id: number;
};

function VerticalCard({ comic, id }: CardTYPE) {
  return (
    <div className="m-2 grow flex justify-center">
      <Link href={comic.url}>
        <div className="px-2 py-1 h-content bg-transparent">
          <div className="flex flex-shrink rounded-md">
            <div className="flex flex-col rounded-md">
              <div className="relative">
                <div className="select-none mx-auto flex flex-1 justify-center rounded-xl sm:h-72 sm:w-48">
                  <Image
                    className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none"
                    alt={comic.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    sizes="13vw"
                    src={comic.thumb}
                    width="500"
                    height="715"
                  />
                </div>
                {/* <div className="absolute top-1 left-1 right-0 text-md md:text-sm font-bold font-catamaran w-fit pr-2 max-w-2/3 ml-1 md:ml-0 text-gray-100 bg-purple-300 dark:bg-purple-500 opacity-95 mt-1 capitalize text-left select-none cursor-pointer flex items-center justify-center flex-0 rounded-md">
                  <div className="mt-1 px-2 py-1">
                    {"  " + comic.comic_choice}
                  </div>
                </div> */}

                {/* <div>
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 flex justify-start md:justify-center">
                    <div className=" shrink-1 py-1 opacity-80 text-sm md:text-sm font-semibold mt-2 font-roboto capitalize  text-purple-400 text-center select-none cursor-pointer     border-purple-700  border-2 bg-black rounded-md w-fit px-3">
                      <p> {comic.chapterCount + " Chapters "}</p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="justify-end flex-none">
                <div className="flex flex-col font-roboto py-4 px-4 md:px-1 text-zinc-600 sm:w-48">
                  <div className="min-h-5 w-full text-xl md:text-md   text-left select-none cursor-pointer text-zinc-900 flex-none flex-0 dark:text-white   hover:text-purple-400 dark:hover:text-purple-500 font-bold">
                    {comic.title}
                  </div>

                  <div className=" min-h-3 w-full text-sm font-medium text-left select-none cursor-pointer flex-none line-clamp-2 md:line-clamp-1 flex-0">
                    {dateFromNow(comic.created_at)}
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
