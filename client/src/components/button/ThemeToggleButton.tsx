import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  // Check the local storage for the saved theme or default to light
  // const savedTheme = localStorage.getItem("theme");
  // const [theme, setTheme] = useState(savedTheme || "light");

  // // Change theme function
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };

  // // Apply the theme to the document
  // useEffect(() => {
  //   document.documentElement.classList.remove("light", "dark");
  //   document.documentElement.classList.add(theme);
  // }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 hover:bg-slate-200 flex items-center justify-center rounded-xl cursor-pointer"
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
