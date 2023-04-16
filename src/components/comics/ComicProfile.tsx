import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect } from "react";

import Image from "next/image";
import Adsense from "../essentials/Adsense";

type ComicsType = {
  comic: {
    id: number;
    title: string;
    viewUrl: string;
    description: string;
    created_at: string;
    updated_at: string;
    isMature: boolean;
    isLocked: boolean;
    author: string;
    artist: string;
    publisher: string;
    tags: Array<{
      svg: any;
      name: string;
      tagCode: string;
    }>;
    first_ch: {
      volumeNumber: number;
      chapterNumber: number;
      comicSlug: string;
    };
    thumb: string;

    volumes: {
      [x: string]: any;
      chapters: Array<{
        number: number;
        name: string;
        id: number;
        url: string;
      }>;
      number: number;
      id: number;
      name: string;
      chapters_exist: boolean;
    };

    titleSlug: string;
  };
};

function ComicProfile({ comic }: ComicsType) {
  const [bookmarkText, setBookmarkText] = useState("Bookmark");

  useEffect(() => {
    if (!localStorage[comic.id]) {
      //@ts-ignore
      localStorage.setItem(comic.id, JSON.stringify([...new Set()]));
    }
    Bookmark_details();
    readAlready();
  });

  function Bookmark_details() {
    //@ts-ignore
    let bookmarks = new Map(JSON.parse(localStorage.getItem("bookmarks")));
    if (bookmarks.has(comic.id)) {
      setBookmarkText("Bookmarked");
    } else {
      setBookmarkText("Bookmark");
    }
  }

  function readAlready() {
    //@ts-ignore
    let comicChapters = new Set(JSON.parse(localStorage.getItem(comic.id)));
    comicChapters.forEach(function (value) {
      const rid = value + "_chapter_id_read";
      const rnid = value + "_chapter_id_not_read";
      if (document.getElementById(rid)) {
        document.getElementById(rid)!.classList.remove("hidden");
      }
      if (document.getElementById(rnid)) {
        document.getElementById(rnid)!.classList.add("hidden");
      }
    });
  }
  const create_comic_bookmark = () => {
    let comic_bookmark = [];
    // const bookmark = {
    //   comic: {
    //     title: element[1][0],
    //     created_at: element[1][3],
    //     url: element[1][2],
    //     thumb: element[1][1],
    //   },
    //   id: element[0],
    // };
    comic_bookmark.push(comic.title);
    comic_bookmark.push(comic.thumb);
    comic_bookmark.push("/comics/" + comic.titleSlug);
    comic_bookmark.push(comic.updated_at);
    return comic_bookmark;
  };
  const bookmark = () => {
    //@ts-ignore
    let bookmarks = new Map(JSON.parse(localStorage.getItem("bookmarks")));
    console.log(bookmarks.has(comic.id));
    if (bookmarks.has(comic.id)) {
      bookmarks.delete(comic.id);
      console.log("removed bookmark");
    } else {
      const comic_detail = create_comic_bookmark();
      bookmarks.set(comic.id, comic_detail);
      console.log("added bookmark");
    }
    //@ts-ignore
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks]));
    Bookmark_details();
    console.log("bookmarking function");
  };
  const readChapter = (cid: any) => {
    //@ts-ignore
    let comicChapters = new Set(JSON.parse(localStorage.getItem(comic.id)));
    if (comicChapters.has(cid)) {
      console.log("Read chapter Already! ID: " + cid);
    } else {
      console.log("Read chapter! ID: " + cid);
      comicChapters.add(cid);
    }
    //@ts-ignore
    localStorage.setItem(comic.id, JSON.stringify([...comicChapters]));
  };

  return (
    <>
      <h1 className="mx-8 my-3 pb-2 text-2xl capitalize font-catamaran font-bold text-left line-clamp-3 ml-2 dark:text-white select-text cursor-pointer">
        {comic.title}
      </h1>
      <div
        style={{ minHeight: "450px" }}
        className="flex flex-col xl:flex-row justify-center sm:justify-evenly gap-10 my-2 mx-auto sm:mb-5 bg-neutral-200 dark:bg-neutral-900 py-5 xl:px-10 px-2 rounded-lg min-w-fit"
      >
        <div className="image2 mx-auto   xl:mx-auto flex items-center">
          <div className="relative w-48">
            <div className="image select-none mx-auto rounded-xl h-72 w-48">
              <Image
                className="rounded-xl  object-fit overflow-hidden  sm:h-72 min-w-full sm:w-48 select-none"
                alt={comic.titleSlug}
                referrerPolicy="no-referrer"
                sizes="13vw"
                src={comic.thumb}
                priority={true}
                quality={80}
                width="500"
                height="715"
              ></Image>
            </div>
          </div>
        </div>

        <div className="max-w-md min-w-fit w-full mx-auto   xl:mx-auto xl:px-4 relative gap-3 h-16 xl:h-auto">
          <div
            id="props.ads_comic.ads_below_title"
            className="hidden xl:block mb-16"
          >
            {/* <Adsense
              style={{ display: "block" }}
              dataAdClient={"ca-pub-4705209099510"}
              dataAdSlot={"9988830"}
              dataAdFormat={"auto"}
              dataFullWidthResponsive={true}
            /> */}
          </div>
          <div className="absolute bottom-0 flex justify-around w-full text-white bg-white dark:bg-black rounded-lg bg-opacity-50 dark:bg-opacity-20 p-3">
            <button
              className="py-2 px-4 bg-purple-500 rounded-md m-3 w-32 select-none"
              onClick={() => {
                bookmark();
              }}
            >
              {bookmarkText}
            </button>

            <Link
              href={
                "/comics/" +
                comic.first_ch.comicSlug +
                "/volume/" +
                comic.first_ch.volumeNumber +
                "/chapter/" +
                comic.first_ch.chapterNumber
              }
            >
              <button className="py-2 px-4 bg-lime-700 rounded-md m-3 w-44 select-none">
                Read First Chapter
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:px-10 px-3 my-2 mx-auto sm:mb-5 bg-neutral-200 dark:bg-neutral-900 py-5 rounded-lg min-w-fit ">
        {/* <!-- here we will put description inside box --> */}
        <h2 className="text-xl font-roboto p-1   w-full text-justify max-w-md   font-bold text-gray-900 dark:text-gray-100 select-none   ">
          {"Description"}
        </h2>

        <p className="font-catamaran text-justify p-2 sm:mx-auto text-gray-800 dark:text-gray-400  mb-3 cursor-text select-text">
          {comic.description}
        </p>
      </div>
      <div
        id="ads-comic-middle"
        className="px-3 mb-2 sm:mb-5 mx-auto rounded-lg min-w-fit xl:hidden"
      >
        <div className="flex flex-col my-2">
          {/* <Adsense
            style={{ display: "block" }}
            dataAdClient={"ca-pub-4705209099510"}
            dataAdSlot={"4696990"}
            dataAdFormat={"auto"}
            dataFullWidthResponsive={true}
          /> */}
        </div>
      </div>
      <div className="sm:px-10 px-3 my-2 mx-auto  mb-4 bg-neutral-200 dark:bg-neutral-900 py-5 rounded-lg min-w-fit">
        <h3 className="text-xl font-roboto p-1 w-full text-justify max-w-md font-bold dark:text-white">
          {"Content"}
        </h3>

        <div className="flex flex-col  ">
          {comic.volumes.map((volume: any, key: any) => (
            <div key={key}>
              <div className="flex flex-col my-2"></div>

              <div className="  text-xl font-roboto my-2   font-bold   text-justify   text-gray-900 dark:text-gray-100 border-b border-purple-700 w-full  p-2 mb-5">
                {volume.chapters_exist && (
                  <div className="flex flex-row justify-between items-center">
                    <div>{"Volume " + volume.number} </div>{" "}
                    <div className="text-neutral-500 px-2 text-sm capitalize">
                      {" "}
                      Scroll
                    </div>
                  </div>
                )}
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                id={"vol" + volume.id}
              >
                {volume.chapters.map((chapter: any, index: any) => (
                  <div key={index}>
                    <Link
                      className="flex grow h-full w-full"
                      href={
                        "/comics/" +
                        comic.titleSlug +
                        "/volume/" +
                        volume.number +
                        "/chapter/" +
                        chapter.number
                      }
                      onClick={() => {
                        readChapter(chapter.id);
                      }}
                    >
                      <div className="   col-span-1 flex grow flex-row justify-start items-center p-3 rounded-md bg-gray-100 dark:bg-neutral-800 gap-2 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-600 cursor-pointer">
                        <div className=" select-none first-letter:rounded-xl shrink-0">
                          <p
                            id={chapter.id + "_chapter_id_read"}
                            className="hidden"
                          >
                            <AiOutlineEye
                              className="  h-8 w-8  cursor-pointer focus:outline-none focus:ring-2 text-purple-300 rounded-md"
                              aria-hidden="true"
                            />{" "}
                          </p>
                          <p
                            id={chapter.id + "_chapter_id_not_read"}
                            className=""
                          >
                            {" "}
                            <AiOutlineEyeInvisible
                              className="h-8 w-8  cursor-pointer focus:outline-none focus:ring-2 text-red-300 rounded-md"
                              aria-hidden="true"
                            />
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-evenly items-center">
                          <div className="text-sm dark:text-gray-100 ">
                            {"Chapter " + chapter.number + " : "}
                          </div>
                          <div className="text-sm dark:text-gray-300 ml-2">
                            {chapter.name}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="ads-comic-middle"
        className="px-3 mb-2 sm:mb-5 mx-auto rounded-lg min-w-fit"
      >
        <div className="flex flex-col my-2">
          {/* <Adsense
            style={{ display: "block" }}
            dataAdClient={"ca-pub-4705209099510"}
            dataAdSlot={"4696990"}
            dataAdFormat={"auto"}
            dataFullWidthResponsive={true}
          /> */}
        </div>
      </div>
    </>
  );
}

export default ComicProfile;
