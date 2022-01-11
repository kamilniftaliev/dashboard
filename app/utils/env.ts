export const isClient = () => typeof window !== "undefined";

export const setHTMLAttr = (attr: string) =>
  document.documentElement.setAttribute("class", attr);
