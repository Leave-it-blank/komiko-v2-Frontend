import { COMIC_DETAILS_APITYPE } from "@/utils/types";
import { getComicDetails, getAllComics } from "@/utils/api";
import { dateFromMMDOYYYY, dateFromNow } from "@/utils/dates";
import ComicProfile from "@/components/comics/ComicProfile";
import { AiOutlineTag } from "react-icons/ai";
import Support from "@/components/layouts/Support";
import { loadDisque } from "@/utils/disque";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import Link from "next/link";

export default function Comics({ comic }: COMIC_DETAILS_APITYPE) {
  const disq = `${process.env.NEXT_PUBLIC_COMMENT_DISQ}` ?? "mysite";

  return (
    <div className="max-w-screen-2xl py-10 w-full min-h-screen mx-auto">
      <Head>
      <title>{comic.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}</title>
                <meta
                    name="description"
                    content={comic.description}
                />
                <meta name="image" content={comic.thumb} />
                <meta property="og:type" content="website" />

                <meta
                    property="og:title"
                    content={comic.title}
                />
                <meta
                    property="og:description"
                    content={comic.description}
                />
                <meta property="og:image" content={comic.thumb} />
                <meta
                    property="og:url"
                    content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${comic.titleSlug}`}
                />
                <meta name="twitter:title" content={comic.title} />
                <meta name="twitter:description" content={comic.description} />
                <meta name="twitter:image" content={comic.thumb} />


                <meta
                    property="twitter:url"
                    content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${comic.titleSlug}`}
                />
      </Head>
      <div className="flex flex-col xl:flex-row justify-evenly sm:mx-10 gap-2">
        <div className="xl:w-8/12 w-full  rounded-lg mx-auto">
          <ComicProfile comic={comic} />

          <div className="flex flex-col md:flex-col justify-center sm:justify-evenly gap-3 my-2 mx-auto  bg-sky-300 dark:bg-neutral-900 py-5   rounded-lg min-w-fit px-5 sm:px-10">
            {/* <!-- here we will put description inside box --> */}
            <h3 className="text-xl font-roboto p-1   w-full text-left max-w-md   font-bold  text-sky-900 dark:text-gray-100">
              {"Comment Section"}
            </h3>
            <div className="py-3"></div>
            <div className="rounded-xl    ">
              <DiscussionEmbed
                shortname={disq}
                config={{
                  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${comic["title"]}`,
                  identifier: `komiko ${comic["title"]}`,
                  title: `komiko ${comic["title"]}`,
                }}
              />
            </div>
          </div>
          <div
            id="props.ads_comic.below_content"
            className="flex flex-col my-2 mb-5"
          >
            {/* <Adsense
              style={{ display: "block" }}
              dataAdClient={"ca-pub-47052090995100"}
              dataAdSlot={"73231543"}
              dataAdFormat={"auto"}
              dataFullWidthResponsive={true} 
            />*/}
          </div>
        </div>
        <div className="rounded-lg w-full  xl:w-4/12 xl:ml-10 mx-auto">
          <div className="flex flex-col md:flex-col justify-center sm:justify-evenly gap-3 my-2 mx-auto sm:mb-5 bg-sky-200 dark:bg-neutral-900 py-5 md:px-24 px-2 xl:px-5 rounded-lg min-w-fit">
            <h2 className="flex flex-wrap  ">
              {comic["tags"].map((tag: any, key) => (
                <Link href={`/search?tags=${tag.name}`} key={key}>
                  <div className="flex flex-row cursor-pointer select-none align-middle justify-items-center justify-center gap-2 px-4 m-1 py-2 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl text-white font-bold font-catamaran text-sm capitalize">
                    <AiOutlineTag
                      className="    h-6 w-4  focus:outline-none focus:ring-2 text-sky-300 rounded-md"
                      aria-hidden="true"
                    />{" "}
                    <span className="mt-0.5 ">{tag.name}</span>
                  </div>
                </Link>
              ))}
            </h2>

            <div
              id="sol_button"
              className="  text-xl font-roboto   font-bold   text-justify     text-sky-900 dark:text-gray-100 border-b border-sky-700 w-full   p-1"
            >
              <div className="flex flex-row justify-between items-center">
                <div>Source</div>{" "}
                <div className="text-neutral-500 px-2 text-sm capitalize">
                  {" "}
                  {dateFromMMDOYYYY(comic.updated_at)}
                </div>
              </div>
            </div>

            <div className="text-gray-500">
              <div>
                <div className=" flex flex-col justify-center p-3 mx-2 capitalize text-gray-800 dark:text-gray-400 select-none">
                  <div className=" flex flex-row justify-between">
                    <p className="px-2">Author: </p>
                    <Link href={`/search?author=${comic.author}`}>
                      {" "}
                      <p className="text-sky-500 dark:text-neutral-300">
                        {comic.author}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="px-2">Artist:</p>
                    <Link href={`/search?artist=${comic.artist}`}>
                      <p className="text-sky-500 dark:text-neutral-300">
                        {comic.artist}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="px-2">Last Updated:</p>
                    <p className="text-sky-500 dark:text-neutral-300">
                      {dateFromNow(comic.updated_at)}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="px-2">Created:</p>
                    <p className="text-sky-500 dark:text-neutral-300">
                      {dateFromMMDOYYYY(comic.created_at)}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="px-2">Mature:</p>
                    <p className="text-sky-500 dark:text-neutral-300">
                      {comic.isMature ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="px-2">Locked:</p>
                    <p className="text-sky-500 dark:text-neutral-300">
                      {comic.isLocked ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="px-2">publisher:</p>
                    <p className="text-sky-500 dark:text-neutral-300">
                      {comic.publisher}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="px-2">Total Comments:</p>
                    <p className="text-sky-500 dark:text-neutral-300">
                      <CommentCount
                        shortname={disq}
                        config={{
                          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/comics/${comic["title"]}`,
                          identifier: `komiko ${comic["title"]}`,
                          title: `komiko ${comic["title"]}`,
                        }}
                      >
                        {/* Placeholder Text */}0
                      </CommentCount>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="props.ads_comic.below_tags"
            className="flex flex-col my-2 mb-5"
          >
            {/* <Adsense
              style={{ display: "block" }}
              dataAdClient={"ca-pub-47052090995100"}
              dataAdSlot={"62432758"}
              dataAdFormat={"auto"}
              dataFullWidthResponsive={true}
            /> */}
          </div>
          <Support />
          <div
            id="props.ads_comic.below_support"
            className="flex flex-col my-2 mb-5"
          >
            {/* <Adsense
              style={{ display: "block" }}
              dataAdClient={"ca-pub-470520909951"}
              dataAdSlot={"353224"}
              dataAdFormat={"auto"}
              dataFullWidthResponsive={true}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  //add some preloading for comics here via backend api
  // const { comics } = await getComics(); {{TODO}}
  const { comics } = await getAllComics();
  if (!comics) {
    const paths = [{ params: { comic_slug: "" } }];
    return { paths, fallback: "blocking" };
  }

  const paths = comics.map((comic: any) => {
    return { params: { comic_slug: comic.titleSlug } };
  });
  // console.log(path);

  // const paths = [{ params: { comic_slug: "" } }];
  // console.log(paths);

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context: any) {
  const { comic } = await getComicDetails(context.params);

  if (!comic) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      comic: comic,
    },
    revalidate: 10,
  };
}
