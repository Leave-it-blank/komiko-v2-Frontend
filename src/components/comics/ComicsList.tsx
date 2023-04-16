import HorizontalCard from "../frames/without_chapter_comics/HorizontalCard";
import VerticalCard from "../frames/without_chapter_comics/VerticalCard";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

import { useState, useEffect } from "react";

type chapterData = {
  chapters: Array<{
    id: number;
    title: string;
    titleSlug: string;
    created_at: string;
    choice: string;
    chapterCount: number;
    type: string;
    isMature: false;
    status: string;
    thumb: string;
  }>;
};

function ComicsList({ chapters }: chapterData) {
  const [layout, setLayout] = useState("Basic"); //Basic or Advanced

  useEffect(() => {
    if (window.localStorage.getItem("layout") === "Advanced") {
      setLayout("Advanced");
    } else {
      setLayout("Basic");
    }
  }, []);

  const layoutHandler = () => {
    if (layout === "Basic") {
      setLayout("Advanced");
      window.localStorage.setItem("layout", "Advanced");
    } else {
      setLayout("Basic");
      window.localStorage.setItem("layout", "Basic");
    }
  };

  return (
    <>
      <div className="md:pl-20">
        <div className="flex flex-row justify-between px-4 w-full">
          <h1 className="text-3xl px-2 pt-10 pb-2 font-roboto font-bold capitalize text-sky-900 dark:text-white">
            Latest
          </h1>
          <button className="text-xl px-2 pt-10 pb-2 font-roboto font-bold capitalize text-sky-900 dark:text-white">
            <ArrowsRightLeftIcon
              className=" h-5 w-5"
              onClick={() => layoutHandler()}
            />
          </button>
        </div>
        {layout === "Advanced" ? (
          <div
            className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
            style={{ minHeight: " 10rem" }}
          >
            {chapters.map((comic, key) => (
              <VerticalCard comic={comic} key={key} />
            ))}
          </div>
        ) : (
          <div
            className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
            style={{ minHeight: " 10rem" }}
          >
            {chapters.map((comic, key) => (
              <HorizontalCard comic={comic} key={key} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default ComicsList;
