import React from 'react';

export interface H2Props extends React.ComponentProps<'h2'> {

};

export const H2 = ({ children, className, ...props }: H2Props) => (
  <h2 {...props}
    className={`
      text-h2 font-subheading
      ${className ? className : ''
    }`
  }>{children}</h2>
);
