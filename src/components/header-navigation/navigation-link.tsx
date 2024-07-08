import React from "react";
import { MouseEventHandler } from "react";

export interface NavigationLinkProps extends React.ComponentProps<'a'> {
  text: string;
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const NavigationLink = ({ text, href, className, onClick, ...props }: NavigationLinkProps) => {
  return (
    <li className={`
      border-b-2 border-b-transparent hover:border-b-black flex justify-center items-center
      text-link
      ${className ? className : ''}
    `}>
      <a {...props} href={href} onClick={onClick}>
        {text}
      </a>
    </li>
  )
};
