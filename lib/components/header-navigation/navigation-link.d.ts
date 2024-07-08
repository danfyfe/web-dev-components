import React from "react";
import { MouseEventHandler } from "react";
export interface NavigationLinkProps extends React.ComponentProps<'a'> {
    text: string;
    href: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export declare const NavigationLink: ({ text, href, className, onClick, ...props }: NavigationLinkProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=navigation-link.d.ts.map