import React from "react";

export interface ButtonProps extends React.ComponentProps<'button'> {
  asLink?: boolean;
  inverted?: boolean;
};

export const Button = ({ className, children, type="button", asLink, inverted, disabled, ...props}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled ? true: undefined}
      {...props}
      className={`
        bg-primary border-2 border-primary text-white
        p-2 rounded-inner flex justify-center items-center
        ${className ? className : ''}
        ${inverted ? '!bg-white !text-primary' : ''}
        ${asLink ? 'border-none bg-transparent !text-inherit' : ''}
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
      `}
    >
      {children}
    </button>
  )
};

