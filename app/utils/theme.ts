type ColorPalette = {
  /** color class for usage in background */
  bgColor: string;

  /** color class for usage in borders */
  borderColor: string;

  /** color class for usage in text */
  textColor: string;
};

/**
 *
 * @param color - color name from https://tailwindcss.com/docs/customizing-colors
 * @returns {ColorPalette} color palette
 */
export const getColorPalette = (color: string): ColorPalette => {
  return {
    bgColor: `bg-${color}-500`,
    borderColor: `border-${color}-500`,
    textColor: `text-${color}-500`,
  };
};
