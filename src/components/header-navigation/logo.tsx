import React from "react";
import { LogoProps } from ".";

const Logo = ({ logo }: { logo: LogoProps }) => (
  <div className="flex justify-center items-center">
    <a href="/" aria-label={logo.label ? logo.label : logo.alt}>
      <img alt={logo.alt} src={logo.src} height={logo.height ?? undefined} width={logo.width ?? undefined} />
    </a>
  </div>
); 

export default Logo;
