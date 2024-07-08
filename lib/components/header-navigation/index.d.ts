import React from "react";
export interface LogoProps {
    src: string;
    alt: string;
    href?: string;
    label?: string;
    height: number;
    width: number;
}
export interface NavigationItem extends React.ComponentProps<'a'> {
    text: string;
    href: string;
}
export interface HeaderNavigationProps {
    logo: LogoProps;
    navigationItems: NavigationItem[];
}
export declare const HeaderNavigation: ({ navigationItems, logo }: HeaderNavigationProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map