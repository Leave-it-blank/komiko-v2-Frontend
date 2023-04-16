import { CHAPTER_APITYPE } from "@/utils/types";
import { useEffect, useState } from "react";

import { getChapter } from "@/utils/api";
import BasicReader from "@/components/reader/BasicReader";
import LoadingSpinner from "@/components/layouts/LoadingSpinner";
import AdvanceReader from "@/components/reader/AdvanceReader";

function ChapterPage({ chapter }: CHAPTER_APITYPE) {
  const [reader, setReader] = useState("loading");
  useEffect(() => {
    readChapter(chapter.ch_id);
  });
  const readChapter = (cid: any) => {
    let comicChapters = new Set(
      //@ts-ignore
      JSON.parse(localStorage.getItem(chapter.comic_ID))
    );
    if (comicChapters.has(cid)) {
      // console.log("Read chapter Already!" + cid);
    } else {
      //   console.log("Read chapter  !" + cid);
      comicChapters.add(cid);
    }
    //@ts-ignore
    localStorage.setItem(chapter.comic_ID, JSON.stringify([...comicChapters]));
  };
  useEffect(() => {
    const myreader = localStorage.getItem("reader") ?? "basic";
    setReader(myreader);
    const select = document.querySelector(
      "#select_reader"
    ) as HTMLSelectElement;
    if (select) {
      select.value = myreader;
    }
  }, [setReader]);
  //onsole.log(reader);
  const handleReader = () => {
    const myreader = document.querySelector(
      "select[name=reader]"
    ) as HTMLSelectElement;
    //console.log(myreader.value);
    localStorage.setItem("reader", myreader.value);
    setReader(myreader.value);
  };

  if (reader == "loading") {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="container mx-auto max-w-6xl pt-10 px-1 min-h-screen ">
        <div className="flex justify-between py-3 px-2 items-center dark:text-white  ">
          <div className="w-1/4">
            <form onChange={handleReader}>
              <label
                htmlFor="reader"
                className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
              >
                Select Reader
              </label>
              <select
                defaultValue={reader}
                name="reader"
                id="select_reader"
                className="bg-neutral-50 border w-full border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-neutral-900 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="basic">WebToon</option>
                <option value="advanced">Manga</option>
              </select>
            </form>
          </div>
        </div>

        {reader === "basic" && <BasicReader chapter={chapter} />}
        {reader === "advanced" && <AdvanceReader chapter={chapter} />}
      </div>
    </>
  );
}

export default ChapterPage;

export async function getStaticPaths() {
  const paths = [
    {
      params: { comic_slug: "", volume_id: "0", chapter_id: "0" },
    },
  ];
  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context: any) {
  const comic = await getChapter(context.params);
  if (!comic) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      chapter: comic,
    },
    revalidate: 10,
  };
}
