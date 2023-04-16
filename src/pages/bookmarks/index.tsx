import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/layouts/LoadingSpinner";
import BookmarkList from "@/components/comics/BookmarkList";

export default function Comics() {
  const [comics, setComics] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const comic = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
    const book: {
      comic: { title: any; created_at: any; url: any; thumb: any };
      id: any;
    }[] = [];

    comic.forEach((element: any) => {
      book.push({
        comic: {
          title: element[1][0],
          created_at: element[1][3],
          url: element[1][2],
          thumb: element[1][1],
        },
        id: element[0],
      });
    });
    // console.log(book);
    setComics(book);
    setLoading(false);
  }, []);

  if (comics.length == 0 && loading) {
    return <LoadingSpinner />;
  }

  if (!loading && comics.length == 0) {
    return (
      <div className={`mx-auto`}>
        <div className="pt-10"> </div>
        <div className="max-w-screen-2xl flex  flex-col mx-auto mt-10">
          <div className="flex flex-col my-2 mx-auto">
            <div className="min-h-screen">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-sky-900 dark:text-white">
                  No Bookmarks
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mx-auto`}>
      <div className="pt-10"> </div>
      <div className="max-w-screen-2xl flex  flex-col mx-auto ">
        <div className="flex flex-col my-2 mx-auto">
          <div className="min-h-screen">
            <BookmarkList data={comics} />
          </div>
        </div>
      </div>
    </div>
  );
}
