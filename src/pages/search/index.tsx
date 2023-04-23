import { getAllComics } from "../../utils/api";
import { ALLCOMICS_APITYPE } from "../../utils/types";
import { useCallback, useEffect, useRef, useState } from "react";
import SearchList from "@/components/search/SearchList";
import Adsense from "@/components/essentials/Adsense";
// Path: src/pages/search/index.js
export default function SearchPage({ comics }: { comics: ALLCOMICS_APITYPE }) {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState(comics);

  //get query from url
  const getQueryFromURL = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search");
    const tagstring = urlParams.get("tags");
    const author = urlParams.get("author");
    const artist = urlParams.get("artist");
    if (query) {
      setQuery(query);
      const results = comics.filter((comic: { title: string }) => {
        return comic.title.toLowerCase().includes(query.toLowerCase());
      });

      setResults(results);
    }
    if (tagstring) {
      const results = comics.filter(
        (comic: {
          tags: [
            {
              svg: any;
              name: string;
              tagCode: string;
            }
          ];
        }) => {
          return comic.tags.some((tag: { name: string }) => {
            return tag.name.toLowerCase() == tagstring.toLowerCase();
          });
        }
      );
      console.log(results);
      setResults(results);
    }
    if (author) {
      const results = comics.filter((comic: { author: string }) => {
        return comic.author.toLowerCase().includes(author.toLowerCase());
      });
      setResults(results);
    }
    if (artist) {
      const results = comics.filter((comic: { artist: string }) => {
        return comic.artist.toLowerCase().includes(artist.toLowerCase());
      });
      setResults(results);
    }
  }, [comics]);

  useEffect(() => {
    getQueryFromURL();
  }, [getQueryFromURL]);

  const handleSearch = (event: { target: { value: any } }) => {
    const query = event.target.value;
    // console.log(query);
    setQuery(query);
    if (query.length) {
      const results = comics.filter((comic: { title: string }) => {
        return comic.title.toLowerCase().includes(query.toLowerCase());
      });
      console.log(results);
      setResults(results);
    } else {
      setResults(comics);
    }
  };

  const handleFilter = () => {
    const filter = document.querySelector(
      "select[name=filter]"
    ) as HTMLSelectElement;

    if (filter) {
      const results = comics.filter((comic: { type: string }) => {
        return comic.type.toLowerCase().includes(filter.value.toLowerCase());
      });
      setResults(results);
    }
    console.log(filter.value);
    //console.log(myreader.value);
    // localStorage.setItem("reader", myreader.value);
    // setReader(myreader.value);
  };

  return (
    <div className={`mx-auto`}>
      <div className="pt-10"> </div>
      <div className="max-w-screen-2xl flex  flex-col mx-auto">
        <div className="flex flex-col my-2 mx-auto w-full">
          <div className="min-h-screen dark:text-white text-sky-900">
            <div className="flex flex-col w-full">
              <div className="md:pl-20">
                <div className="flex justify-between items-center">
                  <form>
                    <label
                      htmlFor="search"
                      className="text-sky-900 dark:text-white px-2"
                    >
                      {" "}
                      Search{" "}
                    </label>
                    <input
                      type="text"
                      aria-label="search"
                      className="  text-sky-900 rounded-md  py-2 px-2"
                      name="search"
                      onChange={handleSearch}
                    ></input>
                  </form>
                  <div>
                    <form onChange={handleFilter}>
                      <select
                        className="text-sky-900 rounded-md px-3 py-2"
                        id="filter"
                        name="filter"
                        defaultValue="all"
                      >
                        <option
                          className="capitalize hidden"
                          value="all"
                          disabled
                        >
                          {" "}
                          Filter{" "}
                        </option>
                        <option className="capitalize" value="manga">
                          manga
                        </option>
                        <option className="capitalize" value="manwha">
                          manwha
                        </option>
                        <option className="capitalize" value="manhua">
                          manhua
                        </option>
                        <option className="capitalize" value="ru manga">
                          Ru Manga
                        </option>
                      </select>
                    </form>
                  </div>
                </div>

                <div>
                  <Adsense
                    style={{ display: "block" }}
                    dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
                    dataAdSlot={process.env.NEXT_PUBLIC_ADS_SEARCH_SLOT_1}
                    dataAdFormat={"auto"}
                    dataFullWidthResponsive={true}
                  />
                  {/* @ts-ignore */}
                  <SearchList comics={results} />
                  <Adsense
                    style={{ display: "block" }}
                    dataAdClient={process.env.NEXT_PUBLIC_ADSENSE_PUB}
                    dataAdSlot={process.env.NEXT_PUBLIC_ADS_SEARCH_SLOT_2}
                    dataAdFormat={"auto"}
                    dataFullWidthResponsive={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { comics } = await getAllComics();
  return {
    props: {
      comics: comics,
    },
    revalidate: 20,
  };
}
