import React from "react";
import { LogoProps } from ".";

const Logo = ({ logo }: { logo: LogoProps }) => (
  <div className="flex justify-center items-center">
    <a href="/" aria-label={logo.label ? logo.label : logo.alt}>
      <img alt={logo.alt} src={logo.src} height={logo.height} width={logo.width} style={{ height: logo.height, width: logo.width }} />
    </a>
  </div>
); 

export default Logo;
