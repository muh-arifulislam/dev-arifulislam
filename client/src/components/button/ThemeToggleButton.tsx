import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center rounded-xl cursor-pointer"
    >
      {theme === "light" ? (
        <MdOutlineDarkMode size={24} />
      ) : (
        <MdOutlineLightMode size={24} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
