import React from 'react';

export interface H4Props extends React.ComponentProps<'h4'> {

};

export const H4 = ({ children, className, ...props }: H4Props) => (
  <h4 {...props}
    className={`
      text-h4 font-subheading
      ${className ? className : ''
    }`
  }>{children}</h4>
);
