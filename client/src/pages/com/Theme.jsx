import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getItem, setItem } from "../../utils/localStorage";

export const THEMEKEY = "theme";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    getItem(THEMEKEY) === "dark" ? "dark" : "light"
  );
  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);
  return (
    <button
      onClick={() => {
        setItem(THEMEKEY, theme === "light" ? "dark" : "light");
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="absolute bottom-4 right-4 bg-gray-200 rounded-full w-8 h-8 cursor-pointer grid place-items-center"
    >
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="text-2xl text-gray-900"
      />
    </button>
  );
};

export default ThemeToggle;
