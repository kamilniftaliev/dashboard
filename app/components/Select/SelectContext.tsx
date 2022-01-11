import {
  createContext,
  useMemo,
  useContext,
  useState,
  useCallback,
  FC,
  ReactNode,
  Context,
} from "react";
import { runIfFn } from "~/utils/react";

export type SelectProps = {
  value?: string;
  onChange?: (newValue: string) => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  open?: boolean;
};

export type SelectContext = Pick<SelectProps, "open" | "value"> & {
  updateValue: (value: string) => void;
};

const SelectContext = createContext<SelectContext>({
  open: false,
  updateValue: () => null,
});

export const SelectProvider = ({
  open,
  value: initialValue,
  children,
  onChange,
}: SelectProps) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useCallback(
    (value: string) => {
      setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  const contextValue = useMemo(
    () => ({
      open,
      value,
      updateValue,
    }),
    [open, value, updateValue]
  );

  return (
    <SelectContext.Provider value={contextValue}>
      {runIfFn(children, contextValue)}
    </SelectContext.Provider>
  );
};

export const useSelect = (): SelectContext => {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error("useSelect must be used within a SelectProvider");
  }

  return context;
};
