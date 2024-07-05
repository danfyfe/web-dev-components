import React from "react";

export interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MainContainer = ({ children, className }: MainContainerProps) => (
  <main id="main-content" className={`min-h-screen ${className ? className : ''}`}>
    { children }
  </main>
);
