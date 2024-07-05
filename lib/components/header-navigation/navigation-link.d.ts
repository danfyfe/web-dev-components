import { MouseEventHandler } from "react";
export interface NavigationLinkProps {
    text: string;
    href: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export declare const NavigationLink: ({ text, href, className, onClick }: NavigationLinkProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=navigation-link.d.ts.map