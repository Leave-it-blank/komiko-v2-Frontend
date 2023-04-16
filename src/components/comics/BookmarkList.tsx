import HorizontalBookmark from "../frames/with_bookmark/HorizontalBookmark";
import VerticalBookmark from "../frames/with_bookmark/VerticalBookmark";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, Key } from "react";
type CardTYPE = {
  data: {
    [x: string]: any;
    comic: {
      title: string;
      created_at: string;
      url: string;
      thumb: string;
    };
    id: number;
  };
};
function BookmarkList({ data }: CardTYPE) {
  console.log(data[0]);
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
            BookMarks
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
            {data.map(
              (
                item: {
                  id: number;
                  comic: {
                    title: string;
                    created_at: string;
                    url: string;
                    thumb: string;
                  };
                },
                key: Key | null | undefined
              ) => (
                <VerticalBookmark comic={item.comic} id={item.id} key={key} />
              )
            )}
          </div>
        ) : (
          <div
            className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-2 gap-2 md:gap-4 mx-auto justify-center sm:justify-start overflow-clip w-full"
            style={{ minHeight: " 10rem" }}
          >
            {data.map(
              (
                item: {
                  id: number;
                  comic: {
                    title: string;
                    created_at: string;
                    url: string;
                    thumb: string;
                  };
                },
                key: Key | null | undefined
              ) => (
                <HorizontalBookmark comic={item.comic} id={item.id} key={key} />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default BookmarkList;
