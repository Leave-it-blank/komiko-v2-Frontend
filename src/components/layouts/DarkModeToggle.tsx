import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function DarkModeToggle() {
  const [theme, setTheme] = useState("dark");

  const [darkMode, setDarkMode] = useState(theme === "dark" ? true : false);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("theme", theme);
      setDarkMode(false);
    } else {
      setTheme("dark");
      localStorage.setItem("theme", theme);
      setDarkMode(true);
    }
  };

  return (
    <>
      <DarkModeSwitch
        className="relative inline-flex h-8 w-11 items-center rounded-full"
        sunColor="blue"
        moonColor="blue"
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}

export default DarkModeToggle;
function useEffects(arg0: () => void) {
  throw new Error("Function not implemented.");
}
