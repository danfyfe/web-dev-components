import React from "react";

export interface ButtonProps extends React.ComponentProps<'button'> {

};

export const Button = ({ className, children, ...props}: ButtonProps) => {
  return (
    <button {...props} className={`${className ? className : ''}`}>
      {children}
    </button>
  )
};

