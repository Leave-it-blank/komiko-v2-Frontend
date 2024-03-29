import Link from "next/link";
import DynamicHTML from "./DynamicHtml";
function Pagination({ links }: any) {
  return (
    <>
      {links.length > 3 && (
        <div>
          <div className="flex flex-wrap   items-center justify-center gap-2 ">
            {links.map((link: any, index: any) => (
              <div key={index}>
                {link.url === null && (
                  <div className="  mr-1   px-4 py-3 text-sm leading-4 text-gray-400 border rounded  bg-white dark:bg-transparent">
                    <DynamicHTML text={link.label} />
                  </div>
                )}

                {link.url !== null && link.active && (
                  <Link
                    className="   mr-1  px-4 py-3 text-sm leading-4 border rounded bg-sky-400 dark:bg-white  text-white dark:text-black border-gray-600 focus:border-sky-500 focus:text-sky-500"
                    href={link.url}
                  >
                    {" "}
                    <DynamicHTML text={link.label} />{" "}
                  </Link>
                )}
                {link.url !== null && !link.active && (
                  <Link
                    className=" bg-white dark:bg-transparent mr-1 px-4 py-3 text-sm leading-4 border rounded  text-gray-400 dark:text-white hover:bg-sky-700 hover:text-white dark:hover:text-gray-100 focus:border-sky-500 focus:text-sky-500"
                    href={link.url}
                  >
                    <DynamicHTML text={link.label} />{" "}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Pagination;
