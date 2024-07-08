import React from 'react';

export interface H5Props extends React.ComponentProps<'h5'> {

};

export const H5 = ({ children, className, ...props }: H5Props) => (
  <h5 {...props}
    className={`
      text-h5 font-subheading
      ${className ? className : ''
    }`
  }>{children}</h5>
);
