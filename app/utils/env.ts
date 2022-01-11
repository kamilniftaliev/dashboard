export const isClient = () => typeof window !== "undefined";

/** Sets class to the root (HTML) tag */
export const setHTMLClass = (attr: string) =>
  document.documentElement.setAttribute("class", attr);
