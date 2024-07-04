import React from "react";
import { MouseEventHandler } from "react";

export interface NavigationLinkProps {
  text: string;
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const NavigationLink = ({ text, href, className, onClick }: NavigationLinkProps) => {
  return (
    <li className={`
      border-b-2 border-b-transparent hover:border-b-black flex justify-center items-center
      ${className ? className : ''}
    `}>
      <a href={href} onClick={onClick}>
        {text}
      </a>
    </li>
  )
};
