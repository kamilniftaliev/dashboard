import clsx from "clsx";
import { forwardRef, HTMLProps } from "react";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant: ButtonVariant;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }: ButtonProps, ref) => {
    const variantClasses = {
      "text-blue-800 bg-blue-200 border-blue-700":
        variant === ButtonVariant.Primary,
      "text-gray-800 bg-gray-100 border-gray-500":
        variant === ButtonVariant.Secondary,
    };

    return (
      <button
        ref={ref}
        className={clsx(
          "rounded text-base py-1 px-3 border",
          className,
          variantClasses
        )}
        {...props}
      />
    );
  }
);
