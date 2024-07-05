import React from "react";

export interface MainContainerProps {
  children: React.ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => (
  <main id="main-content" className="max-w-7xl">
    { children }
  </main>
);
