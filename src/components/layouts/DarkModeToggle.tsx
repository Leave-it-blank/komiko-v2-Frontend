import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

function DarkModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(
    currentTheme === "dark" ? true : false
  );

  const toggleDarkMode = () => {
    if (theme == "dark") {
      setTheme("light");
      setDarkMode(false);
    } else {
      setTheme("dark");
      setDarkMode(true);
    }
  };

  return (
    <>
      <DarkModeSwitch
        className="relative inline-flex h-8 w-11 items-center rounded-full"
        sunColor="sky"
        moonColor="white"
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}

export default DarkModeToggle;
