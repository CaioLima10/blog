"use client";
import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

export function Theme() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== undefined) {
      const storageParse = localStorage.getItem("theme");
      return storageParse === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const OptionsTheme = {
    Moon: <Moon size={28} />,
    Sun: <Sun size={28} />,
  };

  return (
    <button className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? OptionsTheme.Moon : OptionsTheme.Sun}
    </button>
  );
}
