import { createContext, useMemo, useContext } from "react";

export type SelectContext = {
  open: boolean;
};

const SelectContext = createContext<SelectContext>({
  open: false,
});

export const SelectProvider = ({ open, children }) => {
  const value = useMemo(
    () => ({
      open,
    }),
    [open]
  );

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};

export const useSelect = () => {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error("useSelect must be used within a SelectProvider");
  }

  return context;
};
