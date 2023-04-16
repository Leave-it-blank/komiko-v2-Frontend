import Image from "next/image";
import { useEffect, useState } from "react";
import ChapterNavigation from "@/components/comics/ChapterNavigation";
import type { CHAPTER_APITYPE } from "@/utils/types";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  ArrowUpOnSquareStackIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

function AdvanceReader({ chapter }: CHAPTER_APITYPE) {
  let [index, setIndex] = useState(0);
  const handle = useFullScreenHandle();
  useEffect(() => {
    let img = document.getElementById(`my_height_container`);
    //or however you get a handle to the IMG
    if (img) {
      //  let width = img.clientWidth;
      let height = img.offsetHeight;
      let prev = document.getElementById("prev");
      let next = document.getElementById("next");
      if (prev && next) {
        console.log("prev", prev);
        console.log("next", next);
        console.log("height", height);
        prev.style.height = height + "px";
        next.style.height = height + "px";
      }

      // console.log(width, height);
    }
  }, [index]);
  const handleNext = () => {
    if (index >= chapter.pages.length - 1) return;
    setIndex((index) => index + 1);
  };
  const handlePrev = () => {
    if (index <= 0) return;
    setIndex((index) => index - 1);
  };
  const exitHandlder = () => {
    console.log("exit btn added");
    const exit = document.getElementById("exit");
    if (exit) {
      if (exit.style.display === "flex") {
        exit.style.display = "none";
      } else {
        exit.style.display = "flex";
      }
    }
  };
  return (
    <>
      <div className=" flex justify-between w-full items-center">
        <small className="text-red-500 dark:text-red-400 px-2 ">
          This is experimental reader, Please Report bugs in discord.
        </small>
        <div onClick={exitHandlder}>
          <button
            className=" rounded-md flex  justify-end bg-neutral-800 hover:bg-purple-500 text-white items-center px-3 py-2 gap-3"
            onClick={handle.enter}
          >
            {" "}
            Full Screen
            <ArrowUpOnSquareStackIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <FullScreen handle={handle}>
        {" "}
        <small className="text-neurtal-500 dark:text-white flex flex-row gap-3 px-2 items-center ">
          <div className=" text-xl ">{chapter.comic_title}</div>
          <div> ●</div>

          <div>Vol {chapter.vol_no}</div>
          <div> ●</div>

          <div>Chapter {chapter.ch_no}</div>
        </small>
        <div
          className=" relative  mt-5"
          id="my_height_container"
          style={{ height: "80vh" }}
        >
          <button
            id="prev"
            onClick={handlePrev}
            className=" w-1/3 bg-black bg-opacity-0 hover:bg-opacity-25 opacity-0 hover:opacity-90  absolute left-0  flex justify-center items-center min-h-80 "
          >
            <span className="text-purple-100   stroke-white stroke-2 text-xl md:text-5xl font-serif">
              Prev{" "}
            </span>
          </button>
          <button
            id="next"
            onClick={handleNext}
            className=" w-1/3 bg-black bg-opacity-0 hover:bg-opacity-25   absolute right-0 flex justify-center items-center opacity-0 hover:opacity-90 "
          >
            <span className="text-purple-100   stroke-white stroke-2 text-xl md:text-5xl font-serif">
              Next{" "}
            </span>
          </button>
          <Image
            className=" w-full h-full  overflow-y-scroll object-contain"
            onLoad={() => {}}
            src={chapter.pages[index].thumb}
            alt={chapter.pages[index].fileName + chapter.pages[index].id}
            quality={80}
            width={720}
            height={5048}
            priority={true}
            referrerPolicy="no-referrer"
          ></Image>
        </div>
        <ChapterNavigation
          nextCh={chapter.nextCh}
          prevCh={chapter.prevCh}
          comic_titleSlug={chapter.comic_titleSlug}
        />
        <div
          className={`w-full     justify-center items-center -mt-1 hidden`}
          id={"exit"}
          onClick={exitHandlder}
        >
          <button
            className=" rounded-lg flex  justify-end bg-neutral-800 text-white items-center px-4 py-1 gap-3 "
            onClick={handle.exit}
          >
            <ArrowLeftOnRectangleIcon className="h-8 w-8" />
          </button>
        </div>
      </FullScreen>
    </>
  );
}

export default AdvanceReader;
