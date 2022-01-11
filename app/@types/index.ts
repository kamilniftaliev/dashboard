/** Type of a stat in the head of dashboard */
export type StatType = "earnings" | "orders" | "views" | "progress";

/** An object containing URLs to different sizes of the same image */
export type Image = {
  /** Smallest version */
  small: string;

  /** Full size (original) version */
  full: string;
};

export enum ColorModes {
  Light = "light",
  Dark = "dark",
  System = "system",
}
