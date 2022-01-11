import clsx from "clsx";
import { forwardRef, HTMLProps, ReactNode } from "react";

export enum ButtonVariant {
  /** First level button */
  Primary = "primary",

  /** Second level button */
  Secondary = "secondary",
}

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  /** Type (view) of the button */
  variant: ButtonVariant;

  /** Icon on the left of the button */
  leftIcon?: ReactNode;

  /** Icon on the right of the button */
  rightIcon?: ReactNode;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      leftIcon,
      rightIcon,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const variantClasses = {
      "text-blue-800 bg-blue-200 border-blue-700":
        variant === ButtonVariant.Primary,
      "text-gray-800 bg-gray-50 border-gray-400 dark:bg-slate-900":
        variant === ButtonVariant.Secondary,
    };

    return (
      <button
        ref={ref}
        className={clsx(
          "flex items-center gap-x-2 rounded text-base py-1 px-3 border dark:border-slate-600",
          className,
          variantClasses
        )}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);
