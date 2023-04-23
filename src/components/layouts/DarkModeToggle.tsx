import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../hooks/useDarkMode";

function DarkModeToggle() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        className="relative inline-flex h-8 w-11 items-center rounded-full"
        sunColor="white"
        moonColor="blue"
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}

export default DarkModeToggle;
