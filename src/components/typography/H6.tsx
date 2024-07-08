import React from 'react';

export interface H6Props extends React.ComponentProps<'h6'> {

};

export const H6 = ({ children, className, ...props }: H6Props) => (
  <h6 {...props}
    className={`
      text-h6 font-subheading
      ${className ? className : ''
    }`
  }>{children}</h6>
);
