import React from 'react';
import { NavigationItem } from ".";
import { NavigationLink } from "./navigation-link";

const DesktopNavigation = ({ navigationItems }: { navigationItems: NavigationItem[] }) => {
  return (
    <div className="hidden md:flex">
      <ul className="flex gap-10">
        {
          navigationItems.map(({ text, href }, index) => (
            <NavigationLink key={`nav-${text}=${index}`} text={text} href={href} />
          ))
        }
      </ul>
    </div>
  )
};

export default DesktopNavigation;
