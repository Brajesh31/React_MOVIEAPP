import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
 

  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <div className="theme-selector pointer">
      <i
        className={`ms-2 bi ${
          theme === "dark" ? "bi-moon-fill text-white" : "bi-moon"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></i>
    </div>
  );
}
