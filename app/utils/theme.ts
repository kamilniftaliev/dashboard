import { ColorModes } from "~/@types";
import { isClient, setHTMLAttr } from "./env";

/** On page load or when changing themes, best to add inline in `head` to avoid FOUC */
if (isClient()) {
  if (
    localStorage.theme === ColorModes.Dark ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    setHTMLAttr(ColorModes.Dark);
  } else {
    setHTMLAttr("");
  }
}

export const updateColorMode = (mode: ColorModes) => {
  if (mode === ColorModes.System) {
    localStorage.removeItem("theme");
    setHTMLAttr("");
  } else {
    localStorage.theme = mode;
    setHTMLAttr(mode);
  }
};

export const getColorModeFromHTML = () => {
  const HTMLClasslist = document.documentElement.classList;

  if (HTMLClasslist.contains(ColorModes.Dark)) return ColorModes.Dark;

  if (HTMLClasslist.contains(ColorModes.Light)) return ColorModes.Light;

  return ColorModes.System;
};
