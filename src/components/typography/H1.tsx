import React from 'react';

export interface H1Props extends React.ComponentProps<'h1'> {

};

export const H1 = ({ children, className, ...props }: H1Props) => (
  <h1 {...props}
    className={`
      text-h1 font-heading
      ${className ? className : ''
    }`
  }>{children}</h1>
);
