import React from "react";
export interface ButtonProps extends React.ComponentProps<'button'> {
    asLink?: boolean;
    inverted?: boolean;
}
export declare const Button: ({ className, children, type, asLink, inverted, disabled, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map