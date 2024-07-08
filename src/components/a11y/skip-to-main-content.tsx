import React from "react";

export interface SkipToMainContentProps extends React.ComponentProps<'a'> {
}

export const SkipToMainContent = ({ className, ...props }: SkipToMainContentProps) =>
  <a {...props} href='#main-content' className={`absolute top-0 -left-[99999px] focus-visible:left-5 ${className ? className : ''}`}>Skip to main content</a>;

