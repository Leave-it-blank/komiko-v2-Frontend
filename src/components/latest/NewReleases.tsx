import HorComicCard from "../frames/with_chapter/HorComicCard";
import VerComicCard from "../frames/with_chapter/VerComicCard";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

import { useState, useEffect } from "react";

type chapterData = {
  chapters: Array<{
    ch_id: number;
    ch_number: number; //
    ch_created_at: string;
    vol_id: number;
    vol_number: number; //
    vol_created_at: string;
    comic_id: number; //
    comic_title: string;
    comic_titleSlug: string;
    comic_choice: string;
    comic_type: string;
    comic_isMature: boolean;
    comic_status: string;
    comic_thumb: string;
  }>;
};

function NewReleases({ chapters }: chapterData) {
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
          <h1 className="text-3xl px-2 pt-10 pb-2 font-roboto font-bold capitalize dark:text-white">
            Latest
          </h1>
          <button className="text-xl px-2 pt-10 pb-2 font-roboto font-bold capitalize dark:text-white">
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
              //fix the api collioson
              <VerComicCard comic={comic} key={key} />
            ))}
          </div>
        ) : (
          <div
            className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
            style={{ minHeight: " 10rem" }}
          >
            {chapters.map((comic, key) => (
              <HorComicCard comic={comic} key={key} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default NewReleases;
