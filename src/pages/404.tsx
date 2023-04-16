import Link from "next/link";
import Image from "next/image";

const Custom404 = (props: any) => {
  //console.log("Custom 404", props);
  return (
    <div className="min-h-screen  flex items-center justify-center flex-col">
      <div className="bg-sky-200 dark:bg-neutral-900 p-8 rounded-md shadow-md w-96 max-w-full text-center flex  flex-col items-center gap-3">
        <Image
          src="/error.gif"
          alt="cute dog"
          width={300}
          height={300}
          className="w-40 rounded-full border-4 border-white shadow-lg select-none"
        />
        <p className="text-gray-600 mb-4 mt-2">
          {"Oops! The page you're looking for doesn't exist."}
        </p>
        <Link
          href="/"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out"
        >
          {" "}
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
