import React from "react";
import Logo from "./logo";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export interface LogoProps {
  src: string;
  alt: string;
  href?: string;
  label?: string;
  height: number;
  width: number;
};

export interface NavigationItem extends React.ComponentProps<'a'>{
  text: string;
  href: string;
};

export interface HeaderNavigationProps {
  logo: LogoProps;
  navigationItems: NavigationItem[];
};


export const HeaderNavigation = ({ navigationItems, logo }: HeaderNavigationProps) => {
  return (
    <header className="w-full shadow-md fixed top-0 bg-white z-50">
      <nav className="max-w-7xl h-20 w-full m-auto p-6 flex justify-between relative">
        <Logo logo={logo} />
        <DesktopNavigation navigationItems={navigationItems} />
        <MobileNavigation navigationItems={navigationItems} />
      </nav>
    </header>
  )
};
