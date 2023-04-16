function Footer() {
  return (
    <>
      <div className="absolute    w-4/5 ml-20  bg-transparent  ">
        <div className="container mx-auto px-4  relative ">
          <span className=" fixed pointer-events-none select-none capitalize top-0 right-5 text-sky-500 dark:text-gray-200 dark:hover:text-gray-400   font-semibold py-1 text-xs">
            made with ❤️ by Leaveitblank
          </span>
          <div className="border-b-1 border-gray-700">
            <div className="flex flex-wrap items-center md:justify-between justify-center py-2 ">
              <div className="w-full md:w-4/12 px-4">
                <div className="text-sm   text-sky-900  dark:hover:text-gray-400 font-semibold py-3">
                  {process.env.NEXT_PUBLIC_SITE_NAME} © 2023{" "}
                </div>
              </div>
              <div className="w-full md:w-8/12 px-4">
                <ul className="flex flex-wrap list-none md:justify-end justify-end">
                  <li>
                    <a
                      href={process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
                      className="   text-sky-900   dark:hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    >
                      Support us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Footer;
