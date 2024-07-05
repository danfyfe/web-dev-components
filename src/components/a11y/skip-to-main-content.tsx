import React from "react";

export interface SkipToMainContentProps {
  id: string;
  className: string;
}

export const SkipToMainContent = ({ id, className }: SkipToMainContentProps) =>
  <a href='#main-content' className={`absolute top-0 -left-[99999px] focus-visible:left-5 ${className ? className : ''}`}>Skip to main content</a>;

