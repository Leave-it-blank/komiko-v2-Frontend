import Image from "next/image";
import ChapterNavigation from "@/components/comics/ChapterNavigation";
import type { CHAPTER_APITYPE } from "@/utils/types";
function BasicReader({ chapter }: CHAPTER_APITYPE) {
  return (
    <>
      {/* <div className="flex justify-between py-3 px-2 items-center dark:text-white cursor-pointer select-none">
        <div className="text-xl md:text-2xl">{chapter.comic_title}</div>
        <div className="vol p-3 md:text-xl">
          <div>Vol {chapter.vol_no}</div>
          <div>Chapter {chapter.ch_no}</div>
        </div>
      </div> */}
      <small className="text-neurtal-500 dark:text-white flex flex-row gap-3 px-2 items-center ">
        <div className=" text-xl ">{chapter.comic_title}</div>
        <div> ●</div>

        <div>Vol {chapter.vol_no}</div>
        <div> ●</div>

        <div>Chapter {chapter.ch_no}</div>
      </small>

      <ChapterNavigation
        nextCh={chapter.nextCh}
        prevCh={chapter.prevCh}
        comic_titleSlug={chapter.comic_titleSlug}
      />
      <div
        id="props.ads_reader.ads_reader_above_content"
        className="flex flex-col sm:my-2"
      >
        {/* <Adsense
            style={{ display: "block" }}
            dataAdClient={"ca-pub- "}
            dataAdSlot={" "}
            dataAdFormat={"auto"}
            dataFullWidthResponsive={true}
          /> */}
      </div>
      <div className="min-h-screen">
        {chapter.pages.map((page, key) => (
          <div key={key}>
            <Image
              className="select-none w-full flex justify-center items-center  "
              src={page.thumb}
              alt={page.fileName + page.id}
              width={720}
              height={5048}
              priority={true}
              referrerPolicy="no-referrer"
            />
            {key === 3 || key === 6 || key === 12 ? (
              <div
                id="props.ads_reader.ads_reader_inside_content"
                className="flex flex-col my-2"
              >
                {/* <Adsense
                    style={{ display: "block" }}
                    dataAdClient={"ca-pub- "}
                    dataAdSlot={" "}
                    dataAdFormat={"auto"}
                  /> */}
              </div>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
      <div className="pb-10"></div>
      <ChapterNavigation
        nextCh={chapter.nextCh}
        prevCh={chapter.prevCh}
        comic_titleSlug={chapter.comic_titleSlug}
      />
    </>
  );
}

export default BasicReader;
