import clsx from "clsx";
import { Listbox, Transition } from "@headlessui/react";
import { PropsOf } from "@headlessui/react/dist/types";
import {
  SelectContext,
  SelectProps,
  SelectProvider,
  useSelect,
} from "./SelectContext";
import ButtonComponent, { ButtonVariant } from "../Button";
import ChevronUpIcon from "@heroicons/react/outline/ChevronUpIcon";
import ChevronDownIcon from "@heroicons/react/outline/ChevronDownIcon";
import { runIfFn } from "~/utils/react";

/** Root select component */
function Select({ children, ...rest }: SelectProps) {
  return (
    <div className="relative">
      <SelectProvider {...rest}>
        {({ updateValue, value }: SelectContext) => (
          <Listbox value={value} onChange={updateValue}>
            {children}
          </Listbox>
        )}
      </SelectProvider>
    </div>
  );
}

interface ButtonProps extends PropsOf<"button"> {}

/** Select's dropdown triggerer component */
function Button({ children, ...props }: ButtonProps) {
  const { open, value } = useSelect();

  const RightIcon = open ? ChevronUpIcon : ChevronDownIcon;

  return (
    <Listbox.Button
      as={ButtonComponent}
      variant={ButtonVariant.Secondary}
      rightIcon={<RightIcon className="dark:text-slate-50 w-4" />}
      {...props}
    >
      {(args) => runIfFn(children, { ...args, value })}
    </Listbox.Button>
  );
}

interface ItemsProps extends PropsOf<"ul"> {}

/** Dropdown list's wrapper component */
function Items({ className, ...props }: ItemsProps) {
  const { open } = useSelect();

  return (
    <Transition
      show={open}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Listbox.Options
        static
        className={clsx(
          "rounded-sm absolute shadow-lg mt-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 right-0 w-44 origin-top-right",
          className
        )}
        {...props}
      />
    </Transition>
  );
}

interface ItemProps extends PropsOf<"li"> {}

/** Dropdown list's item component */
function Item({ className, ...props }: ItemProps) {
  return (
    <Listbox.Option
      className={clsx(
        "cursor-pointer px-4 py-2 text-base text-slate-800 dark:text-slate-100",
        className
      )}
      {...props}
    />
  );
}

Select.Button = Button;
Select.Items = Items;
Select.Item = Item;

export default Select;
