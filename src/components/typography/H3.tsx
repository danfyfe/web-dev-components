import React from 'react';

export interface H3Props extends React.ComponentProps<'h3'> {

};

export const H3 = ({ children, className, ...props }: H3Props) => (
  <h3 {...props}
    className={`
      text-h3 font-subheading
      ${className ? className : ''
    }`
  }>{children}</h3>
);
