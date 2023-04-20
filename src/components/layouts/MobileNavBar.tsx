import { useRouter } from "next/router";
import {
  HomeIcon,
  NewspaperIcon,
  BookmarkIcon,
  BookOpenIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
function MobileNavBar() {
  let location = useRouter();
  const readerNav = [
    {
      name: "Home",
      href: "/",
      current: location.pathname === "/" ? true : false,
      guest: true,
      icon: <HomeIcon className="h-8 w-8 text-white" />,
      key: 1,
    },
    {
      name: "Latest",
      href: "/latest",
      current: location.pathname === "/latest" ? true : false,
      guest: true,
      icon: <NewspaperIcon className="h-8 w-8 text-white" />,
      key: 2,
    },
    {
      name: "Comics",
      href: "/comics",
      current: location.pathname === "/comics" ? true : false,
      guest: true,
      icon: <BookOpenIcon className="h-8 w-8 text-white" />,
      key: 3,
    },
    {
      name: "Bookmarks",
      href: "/bookmarks",
      current: location.pathname === "/bookmarks" ? true : false,
      guest: true,
      icon: <BookmarkIcon className="h-8 w-8 text-white" />,
      key: 4,
    },
  ];

  const navHandler = () => {
    const navBar = document.getElementById("mob_nav_bar");
    if (navBar) {
      if (navBar.style.display === "none") {
        navBar.style.display = "flex";
        const closeNav = document.getElementById("close_nav_mob");
        if (closeNav) {
          closeNav.style.display = "block";
        }
        const openNav = document.getElementById("open_nav_mob");
        if (openNav) {
          openNav.style.display = "none";
        }
      } else {
        navBar.style.display = "none";

        const closeNav = document.getElementById("close_nav_mob");
        if (closeNav) {
          closeNav.style.display = "none";
        }
        const openNav = document.getElementById("open_nav_mob");
        if (openNav) {
          openNav.style.display = "block";
        }
      }
    }
  };

  return (
    <div className="md:hidden">
      <div
        className="fixed flex flex-row bottom-0 h-20 w-full px-1"
        id="mob_nav_bar"
      >
        <div className="flex flex-row justify-center w-full items-center  gap-3  bg-sky-400  dark:bg-neutral-900 border-b border-r border-t border-sky-500 dark:border-black border-0.3  rounded-t-md">
          {readerNav.map((item) =>
            item.current ? (
              <Link href={item.href} key={item.key}>
                <div
                  aria-label={item.name}
                  title={item.name}
                  className="bg-sky-700 hover:bg-sky-500 rounded-md   w-full flex justify-center items-center p-3"
                >
                  {item.icon}
                </div>
              </Link>
            ) : (
              <Link href={item.href} key={item.key}>
                <div
                  aria-label={item.name}
                  title={item.name}
                  className="hover:bg-sky-500 rounded-md bg-opacity-30 w-full flex justify-center items-center p-3"
                >
                  {item.icon}
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      <div
        className=" fixed right-6 translate-x-1 translate-y-1  bottom-24  bg-red-500 p-2 rounded-xl text-white  hover:text-sky-100 hover:bg-sky-500 cursor-pointer"
        onClick={navHandler}
      >
        <ArrowDownIcon className="  bottom-10 h-6 w-6  " id="close_nav_mob" />
        <ArrowUpIcon
          className="  bottom-10 h-6 w-6   "
          id="open_nav_mob"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default MobileNavBar;
