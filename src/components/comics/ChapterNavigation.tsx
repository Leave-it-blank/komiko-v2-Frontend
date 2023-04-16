import Link from "next/link";
import { HomeIcon, ForwardIcon, BackwardIcon } from "@heroicons/react/24/solid";

function ChapterNavigation({ prevCh, nextCh, comic_titleSlug }: any) {
  return (
    <>
      {" "}
      <div className="grid grid-cols-3 p-4 mb-3 mt-3 font-catamaran gap-2   border-2  border-neutral-800  dark:border-neutral-900 dark:text-gray-200 rounded-md text-sm">
        <div className="  justify-self-start align-middle text-center items-center self-center">
          {prevCh === null ? (
            <></>
          ) : (
            //
            <Link
              href={
                "/comics/" +
                prevCh.comic +
                "/volume/" +
                prevCh.volume +
                "/chapter/" +
                prevCh.chapter
              }
              className=" px-5 py-4 rounded-md bg-neutral-800  hover:bg-sky-500 text-white  dark:text-gray-200  flex justify-center"
            >
              <BackwardIcon className="h-5 w-5" />
            </Link>
          )}
        </div>

        <Link
          href={"/comics/" + comic_titleSlug}
          className="px-5 py-4 rounded-md bg-neutral-800 hover:bg-sky-500 text-white dark:text-gray-200 justify-self-center items-center self-center align-middle text-center"
        >
          <HomeIcon className="h-5 w-5" />
        </Link>
        <div className="  justify-self-end items-center self-center align-middle text-center">
          {nextCh === null ? (
            <></>
          ) : (
            <Link
              href={
                "/comics/" +
                nextCh.comic +
                "/volume/" +
                nextCh.volume +
                "/chapter/" +
                nextCh.chapter
              }
              className=" px-5 py-4 rounded-md bg-neutral-800  hover:bg-sky-500  text-white  dark:text-gray-200  flex justify-center"
            >
              <ForwardIcon className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default ChapterNavigation;
