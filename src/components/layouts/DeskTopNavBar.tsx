import {
  HomeIcon,
  NewspaperIcon,
  ArrowLeftOnRectangleIcon,
  BookmarkIcon,
  BookOpenIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { useRouter } from "next/router";

import Link from "next/link";
function DeskTopNavBar() {
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
    {
      name: "Search",
      href: "/search",
      current: location.pathname === "/search" ? true : false,
      guest: true,
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-white" />,
      key: 5,
    },
  ];

  const navHandler = () => {
    const navBar = document.getElementById("desk_nav_bar");
    const logo = document.getElementById("logo_web");
    console.log(logo);
    if(logo){
      
          logo.style.display = "none";
   
    }
    if (navBar) {
      if (navBar.style.display === "none") {
        if(logo){
         
              logo.style.display = "flex";
         
        }
        navBar.style.display = "flex";
        const closeNav = document.getElementById("close_nav");
        if (closeNav) {
          closeNav.style.display = "block";
        }
        const openNav = document.getElementById("open_nav");
        if (openNav) {
          openNav.style.display = "none";
        }
      } else {
        navBar.style.display = "none";
        if(logo){
          if(logo.style.display === "flex"){
              logo.style.display = "none";
          }}

        const closeNav = document.getElementById("close_nav");
        if (closeNav) {
          closeNav.style.display = "none";
        }
        const openNav = document.getElementById("open_nav");
        if (openNav) {
          openNav.style.display = "block";
        }
      }
    }
  };

  return (
    <div className="hidden md:block ">
      {/* DeskTop */}
      <div
        className="fixed h-screen w-20 px-2 py-28 md:flex flex-col justify-center items-center hidden  "
        id="desk_nav_bar"
      >
        <div className="flex flex-col justify-center items-center h-full  bg-sky-400  dark:bg-neutral-900 border-b border-r border-t border-sky-500 dark:border-black border-0.3 w-full  rounded-xl ">
          <div className="flex flex-col justify-center items-center h-full    w-full gap-3 my-3 mt-8">
            {readerNav.map((item) =>
              item.current ? (
                <Link href={item.href} key={item.key} className="relative">
                  <div
                    onMouseEnter={() => {
                      const tooltip = document.getElementById(
                        item.key + ""
                      ) as HTMLElement;
                      tooltip.style.display = "flex";
                    }}
                    onMouseLeave={() => {
                      const tooltip = document.getElementById(
                        item.key + ""
                      ) as HTMLElement;
                      tooltip.style.display = "none";
                    }}
                    className="  bg-sky-700 hover:bg-sky-500 rounded-md   w-full flex justify-center items-center p-3"
                    aria-label={item.name}
                    title={item.name}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="absolute hidden  justify-start dark:text-white text-sky-900 top-0 -right-20  px-2 translate-y-4   w-20 "
                    id={item.key + ""}
                  >
                    {item.name}
                  </div>
                </Link>
              ) : (
                <Link href={item.href} key={item.key} className="relative">
                  <div
                    onMouseEnter={() => {
                      const tooltip = document.getElementById(
                        item.key + ""
                      ) as HTMLElement;
                      tooltip.style.display = "flex";
                    }}
                    onMouseLeave={() => {
                      const tooltip = document.getElementById(
                        item.key + ""
                      ) as HTMLElement;
                      tooltip.style.display = "none";
                    }}
                    className="hover:bg-sky-500 rounded-md bg-opacity-30 w-full flex justify-center items-center p-3"
                    aria-label={item.name}
                    title={item.name}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="absolute hidden justify-start dark:text-white text-sky-900 top-0 -right-20  px-2 translate-y-4   w-20 "
                    id={item.key + ""}
                  >
                    {item.name}
                  </div>
                </Link>
              )
            )}
          </div>
          <div className="flex flex-col justify-center items-center py-2 w-full my-3 ">
            <a
              target="_blank"
              href={process.env.NEXT_PUBLIC_BACKEND_LOGIN_URL}
              className="relative"
            >
              <div
                className="hover:bg-sky-500 rounded-md bg-opacity-30 w-full flex justify-center items-center p-3"
                onMouseEnter={() => {
                  const tooltip = document.getElementById(
                    "login"
                  ) as HTMLElement;
                  tooltip.style.display = "flex";
                }}
                onMouseLeave={() => {
                  const tooltip = document.getElementById(
                    "login"
                  ) as HTMLElement;
                  tooltip.style.display = "none";
                }}
              >
                <ArrowLeftOnRectangleIcon
                  className="h-8 w-8 text-white"
                  aria-label={"login"}
                />
              </div>
              <div
                className="absolute hidden justify-start dark:text-white text-sky-900 top-0 -right-20  px-2 translate-y-4   w-20 "
                id={"login"}
              >
                {"login"}
              </div>
            </a>
          </div>
        </div>
      </div>{" "}
      <div
        className=" fixed left-6 -translate-x-1 translate-y-1  bottom-5  bg-red-500 p-2 rounded-xl text-white  hover:text-sky-100 hover:bg-sky-500 cursor-pointer"
        onClick={navHandler}
      >
        <ArrowLeftIcon className="  bottom-10 h-6 w-6  " id="close_nav" />
        <ArrowRightIcon
          className="  bottom-10 h-6 w-6   "
          id="open_nav"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default DeskTopNavBar;
