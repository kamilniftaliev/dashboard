import { Fragment } from "react";
import clsx from "clsx";
import { Listbox, Transition } from "@headlessui/react";
import { PropsOf } from "@headlessui/react/dist/types";
import { SelectContext, SelectProvider, useSelect } from "./SelectContext";
import ButtonComponent, { ButtonVariant } from "../Button";

function Select({ children, onChange, ...rest }: PropsOf<Listbox>) {
  return (
    <div className="relative">
      <Listbox onChange={onChange} {...rest}>
        {({ open }) => <SelectProvider open={open}>{children}</SelectProvider>}
      </Listbox>
    </div>
  );
}

interface ButtonProps extends PropsOf<"button"> {}

function Button(props: ButtonProps) {
  return (
    <Listbox.Button
      as={ButtonComponent}
      variant={ButtonVariant.Secondary}
      {...props}
    />
  );
}

interface ItemsProps extends PropsOf<"ul"> {}

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
          "absolute shadow-md bg-white right-0 w-44 origin-top-right",
          className
        )}
        {...props}
      />
    </Transition>
  );
}

interface ItemProps extends PropsOf<"li"> {}

function Item(props: ItemProps) {
  return (
    <Listbox.Option
      className="cursor-pointer px-4 py-2 text-base text-slate-800"
      {...props}
    />
  );
}

Select.Button = Button;
Select.Items = Items;
Select.Item = Item;

export default Select;
