import { useState, useEffect } from "react";

export function useTheme() {
  const getStoredTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Default for SSR or first load
  };

  const [theme, setTheme] = useState(getStoredTheme);

  // Effect to apply theme and sync with localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

// import { useState, useEffect } from "react";

// export function useTheme() {
//   // Get theme from localStorage or default to "light"
//   const savedTheme = localStorage.getItem("theme") || "light";
//   const [theme, setTheme] = useState(savedTheme);

//   // Apply the theme when state changes
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark"); // Enable Tailwind dark mode
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme); // Store theme in localStorage
//   }, [theme]); // Runs when `theme` state changes

//   // Function to toggle theme
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return { theme, setTheme, toggleTheme };
// }
