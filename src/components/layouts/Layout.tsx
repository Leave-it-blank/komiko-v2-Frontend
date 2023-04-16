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
      <div className="fixed top-6 md:left-2 left-12 -translate-x-10 md:translate-x-0">
        {" "}
        <Image
          className="rounded-md cursor-pointer"
          width={80}
          quality={100}
          height={10}
          src="/logo.jpg"
          alt="lynxscans"
        />{" "}
      </div>
      <DeskTopNavBar />
      <main>{props.children}</main>
      <Footer />
      <MobileNavBar />
    </div>
  );
}

export default Layout;
