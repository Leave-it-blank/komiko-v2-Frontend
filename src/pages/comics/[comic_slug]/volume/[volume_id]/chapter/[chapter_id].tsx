import { CHAPTER_APITYPE } from "@/utils/types";
import { useEffect, useState } from "react";
import { loadDisque } from "@/utils/disque";
import { getChapter } from "@/utils/api";
import BasicReader from "@/components/reader/BasicReader";
import LoadingSpinner from "@/components/layouts/LoadingSpinner";
import AdvanceReader from "@/components/reader/AdvanceReader";
import Head from "next/head";
import { DiscussionEmbed, CommentCount } from "disqus-react";

function ChapterPage({ chapter }: CHAPTER_APITYPE) {
  const [reader, setReader] = useState("loading");
  const [quality, setQuality] = useState(90);
  const disq = `${process.env.NEXT_PUBLIC_COMMENT_DISQ}` ?? "mysite";

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

  useEffect(() => {
    
    const myQuality = localStorage.getItem("quality") ?? "90";
    setQuality(Number(myQuality));
    const select = document.querySelector(
      "#select_quality"
    ) as HTMLSelectElement;
    if (select) {
      select.value = myQuality;
    }
  }, [setQuality]);

  const handleQuality = () => {
    const quality = document.querySelector(
      "select[name=quality]"
    ) as HTMLSelectElement;
    //console.log(myreader.value);
    localStorage.setItem("quality", quality.value);
    setQuality(Number(quality.value));
  };


  if (reader == "loading") {
    return <LoadingSpinner />;
  }
  const title = chapter.comic_title + "-" + process.env.NEXT_PUBLIC_SITE_NAME;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={chapter.comic_description} />
        <meta name="image" content={chapter.comic_thumb} />
        <meta property="og:type" content="website" />

        <meta property="og:title" content={chapter.comic_title} />
        <meta property="og:description" content={chapter.comic_description} />
        <meta property="og:image" content={chapter.comic_thumb} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${chapter.comic_titleSlug}`}
        />
        <meta name="twitter:title" content={chapter.comic_title} />
        <meta name="twitter:description" content={chapter.comic_description} />
        <meta name="twitter:image" content={chapter.comic_thumb} />

        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${chapter.comic_titleSlug}`}
        />
      </Head>
      <div className="container mx-auto   pt-10 px-1 min-h-screen max-w-4xl  mt-10">
        <div className="flex justify-between py-3 px-2 items-center dark:text-white  ">
          <div className="w-1/4">
            <form onChange={handleReader}>
              <label
                htmlFor="reader"
                className="block mb-2   text-xs md:text-sm font-medium text-neutral-900 dark:text-white"
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
          <div className="w-1/4">
            <form onChange={handleQuality}>
              <label
                htmlFor="quality"
                className="block mb-2 text-xs md:text-sm font-medium text-neutral-900 dark:text-white "
              >
                Select Image Quality
              </label>
              <select
                defaultValue={String(quality)}
                name="quality"
                id="select_quality"
                className="bg-neutral-50 border w-full border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-neutral-900 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value={50}>Very Low</option>
                <option value={75}>Low</option>
                <option value={90}>Medium</option>
                <option value={100}>High</option>
              </select>
            </form>
          </div>
        </div>

        {reader === "basic" && <BasicReader chapter={chapter}  quality={quality} />}
        {reader === "advanced" && <AdvanceReader chapter={chapter}  quality={quality}  />}
        <div className="flex flex-col md:flex-col justify-center sm:justify-evenly gap-3 my-2 mx-auto  bg-sky-300 dark:bg-neutral-900 py-5   rounded-lg min-w-fit px-5 sm:px-10">
          {/* <!-- here we will put description inside box --> */}
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-xl font-roboto p-1   w-1/2 text-left max-w-md   font-bold  text-sky-900 dark:text-gray-100">
              {"Comment Section"}
            </h3>
            <h4 className="px-4 dark:text-white text-sky-900 py-2">
              <CommentCount
                shortname={disq}
                config={{
                  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${chapter["comic_titleSlug"]}/volume/${chapter["vol_ID"]}/chapter/${chapter["ch_id"]}`,
                  identifier: `komiko ${chapter["comic_titleSlug"]}/${chapter["comic_titleSlug"]}/volume/${chapter["vol_ID"]}/chapter/${chapter["ch_id"]}`,
                  title: `komiko ${chapter["comic_title"]}`,
                }}
              >
                {/* Placeholder Text */}
                Loading.. Comments..
              </CommentCount>
            </h4>
          </div>

          <div className="py-3"></div>
          <div className="rounded-xl    ">
            <DiscussionEmbed
              shortname={disq}
              config={{
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${chapter["comic_titleSlug"]}/volume/${chapter["vol_ID"]}/chapter/${chapter["ch_id"]}`,
                identifier: `komiko ${chapter["comic_titleSlug"]}/${chapter["comic_titleSlug"]}/volume/${chapter["vol_ID"]}/chapter/${chapter["ch_id"]}`,
                title: `komiko ${chapter["comic_title"]}`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterPage;

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        comic_slug: "5007-the-story-of-a-low-rank-soldier-becoming-a-monarch",
        volume_id: "2",
        chapter_id: "109",
      },
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
