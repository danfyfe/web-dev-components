import React from "react";

export interface SectionContainerProps extends React.ComponentProps<'section'> {

};

export const SectionContainer = ({  children, className, ...props }: SectionContainerProps) => (
  <section {...props} className={`${className ? className : ''} rounded-outer`}>
    {children}
  </section>
);
