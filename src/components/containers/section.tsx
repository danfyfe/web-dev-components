import React from "react";

export interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export const SectionContainer = ({ children, className, id }: SectionContainerProps) => (
  <section id={id ? id : undefined} className={className ? className : ''}>
    {children}
  </section>
);
