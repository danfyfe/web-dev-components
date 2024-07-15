import React from "react";

export interface MainContainerProps extends React.ComponentProps<'main'> {
  headerHeight: number;
};

export const MainContainer = ({ children, className, headerHeight, ...props }: MainContainerProps) => (
  <main {...props} id="main-content" className={`min-h-screen ${className ? className : ''}`} style={{ marginTop: headerHeight }}>
    { children }
  </main>
);
