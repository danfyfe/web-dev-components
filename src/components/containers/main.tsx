import React from "react";

export interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MainContainer = ({ children, className }: MainContainerProps) => (
  <main id="main-content" className={`max-w-7xl ${className ? className : ''}`}>
    { children }
  </main>
);
