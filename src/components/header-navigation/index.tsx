import React from "react";
import Logo from "./logo";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export interface LogoProps {
  src: string;
  alt: string;
  href?: string;
  label?: string;
  height?: number;
  width?: number;
};

export interface NavigationItem {
  text: string;
  href: string;
};

export interface HeaderNavigationProps {
  logo: LogoProps;
  navigationItems: NavigationItem[]
};


export const HeaderNavigation = ({ navigationItems, logo }: HeaderNavigationProps) => {
  return (
    <header className="w-full shadow-md">
      <nav className="max-w-7xl h-20 w-full m-auto p-6 flex justify-between">
        <Logo logo={logo} />
        <DesktopNavigation navigationItems={navigationItems} />
        <MobileNavigation navigationItems={navigationItems} />
      </nav>
    </header>
  )
};
