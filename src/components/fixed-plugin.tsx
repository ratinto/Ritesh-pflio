"use client";
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  // Use local storage so theme persists
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme mainly from local storage or user's OS preference
    const theme =
      localStorage.getItem("theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setIsDark(theme === "dark");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev ? "dark" : "light";
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem("theme", nextTheme);
      return !prev;
    });
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-[1000] shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-2 transition duration-300"
    >
      <Button
        onClick={toggleTheme}
        color="gray"
        className="rounded-full min-w-0 p-3 bg-gray-900 dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-300"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          // Light Icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m8.49-8.49h-1.5m-13.98 0h-1.5M17.657 6.343l-1.06 1.06M4.403 19.597l-1.06 1.06m14.142 0l-1.06-1.06M4.403 4.403l-1.06-1.06M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          // Dark Icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </Button>
    </div>
  );
}
