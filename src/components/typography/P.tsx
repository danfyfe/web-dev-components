import React from 'react';

export interface ParagraphProps extends React.ComponentProps<'p'> {

};

export const P = ({ children, className, ...rest }: ParagraphProps) => (
  <p {...rest}
    className={`
      text-paragraph font-paragraph
      ${className ? className : ''
    }`
  }>{children}</p>
);
