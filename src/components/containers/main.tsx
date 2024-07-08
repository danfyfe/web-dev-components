import React from "react";

export interface MainContainerProps extends React.ComponentProps<'main'> {

};

export const MainContainer = ({ children, className, ...props }: MainContainerProps) => (
  <main {...props} id="main-content" className={`min-h-screen ${className ? className : ''}`}>
    { children }
  </main>
);
