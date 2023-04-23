import Image from "next/image";
import { useEffect, useState } from "react";
import ChapterNavigation from "@/components/comics/ChapterNavigation";
import type { CHAPTER_APITYPE } from "@/utils/types";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  ArrowUpOnSquareStackIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import LoadingSpinner from "../layouts/LoadingSpinner";

type quality = {
  quality: number;
};

function AdvanceReader(props: any) {
  const { chapter }: CHAPTER_APITYPE = props;
  const { quality }: quality = props.quality;

  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const handle = useFullScreenHandle();
  const loadNav = () => {
    let img = document.getElementById(`my_height_container`);
    //or however you get a handle to the IMG
    if (img) {
      //  let width = img.clientWidth;
      let height = img.offsetHeight;
      let prev = document.getElementById("prev");
      let next = document.getElementById("next");
      if (prev && next) {
        prev.style.height = height + "px";
        next.style.height = height + "px";
      }
    }
  };
  useEffect(() => {
    loadNav();
  }, [index]);
  useEffect(() => {
    setIndex(0);
  }, [chapter]);

  const handleNext = () => {
    if (index >= chapter.pages.length - 1) return;
    setLoading(true);
    setIndex((index) => index + 1);
  };
  const handlePrev = () => {
    if (index <= 0) return;
    setLoading(true);
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
            className=" rounded-md flex  justify-end bg-neutral-800 hover:bg-sky-500 text-white items-center px-3 py-2 gap-3"
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
        <div className="flex flex-row justify-between items-center px-2 pt-2">
          <small className="text-sky-900 dark:text-white flex flex-row gap-3 px-2 items-center ">
            <div className=" text-xl ">{chapter.comic_title}</div>
            <div> ●</div>

            <div>Vol {chapter.vol_no}</div>
            <div> ●</div>

            <div>Chapter {chapter.ch_no}</div>
          </small>
          <small className="text-sky-900 dark:text-white flex flex-row gap-3 px-2 items-center ">
            Page {index + 1}
          </small>
        </div>
        <div
          className=" relative  mt-5"
          id="my_height_container"
          style={{ height: "80vh" }}
        >
          {index > 0 && (
            <button
              id="prev"
              style={{ height: "80vh" }}
              onClick={handlePrev}
              className=" w-1/3 bg-black bg-opacity-0 hover:bg-opacity-25 opacity-0 hover:opacity-90  absolute left-0  flex justify-center items-center min-h-80 "
            >
              <span className="text-sky-100   stroke-white stroke-2 text-xl md:text-5xl font-serif">
                Prev{" "}
              </span>
            </button>
          )}

          {index + 1 < chapter.pages.length && (
            <button
              id="next"
              onClick={handleNext}
              style={{ height: "80vh" }}
              className=" w-1/3 bg-black bg-opacity-0 hover:bg-opacity-25   absolute right-0 flex justify-center items-center opacity-0 hover:opacity-90 "
            >
              <span className="text-sky-100   stroke-white stroke-2 text-xl md:text-5xl font-serif">
                Next{" "}
              </span>
            </button>
          )}

          {loading && (
            <div className="absolute   -top-24 right-1/2 translate-x-12">
              {" "}
              <LoadingSpinner />
            </div>
          )}

          <Image
            className=" w-full h-full  overflow-y-scroll object-contain"
            src={chapter.pages[index].thumb}
            alt={
              chapter.pages[index].fileName +
              chapter.pages[index].id +
              " chapter " +
              chapter.ch_no +
              "vol " +
              chapter.vol_no +
              "comic " +
              chapter.comic_titleSlug
            }
            quality={quality}
            width={1080}
            height={2000}
            referrerPolicy="no-referrer"
            priority={true}
            onLoadingComplete={() => {
              setLoading(false);
            }}
          ></Image>
          {/* {index + 1 < chapter.pages.length && (
            <Image
              className=" w-full h-full  overflow-y-scroll object-contain hidden"
              src={chapter.pages[index].thumb}
              alt={
                chapter.pages[index].fileName +
                chapter.pages[index].id +
                " chapter " +
                chapter.ch_no +
                "vol " +
                chapter.vol_no +
                "comic " +
                chapter.comic_titleSlug
              }
              quality={quality}
              width={1080}
              height={2000}
              
              priority={true}
              referrerPolicy="no-referrer"
            ></Image>
          )} */}
        </div>
        <ChapterNavigation
          nextCh={chapter.nextCh}
          prevCh={chapter.prevCh}
          setIndex={setIndex}
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
