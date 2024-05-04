import { useEffect, useState } from "react";

export type ColorMode = "auto" | "light" | "dark";

export function useColorMode() {
  const [colorMode, setColorMode] = useState<ColorMode>("auto");

  function addDarkModeClass() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }

  function addLightModeClass() {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }

  function toggleColorMode(mode: ColorMode) {
    setColorMode(mode);
    localStorage.setItem("theme", mode);
  }

  useEffect(() => {
    const modeInLocalStorage = localStorage.getItem("theme");
    if (modeInLocalStorage === "light" || modeInLocalStorage === "dark") {
      setColorMode(modeInLocalStorage);
    }
    setColorMode("auto");
  }, []);

  useEffect(() => {
    if (colorMode === "auto") {
      const isOSDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return isOSDarkMode ? addDarkModeClass() : addLightModeClass();
    }
    colorMode === "dark" ? addDarkModeClass() : addLightModeClass();
  }, [colorMode]);

  return { colorMode, toggleColorMode };
}
