import {
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import Image from "next/image";
import Footer from "./Footer";
import DeskTopNavBar from "./DeskTopNavBar";
import MobileNavBar from "./MobileNavBar";
import DarkModeToggle from "./DarkModeToggle";
function Layout(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className="relative">
      <DeskTopNavBar />
      <main>{props.children}</main>
      <Footer />
      <MobileNavBar />
      <div className="fixed top-6 md:left-2 left-12 -translate-x-10 md:translate-x-0 flex w-full justify-between flex-row items-center " id="logo_web">
        {" "}
        <Image
          className="rounded-md cursor-pointer  -translate-y-2"
          width={80}
          quality={100}
          height={10}
          src="/logo.jpg"
          alt="lynxscans"
        />{" "}
        <div className=" -translate-x-7 translate-y-2">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Layout;
