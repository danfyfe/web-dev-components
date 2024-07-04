import React, { useState } from "react";
import { NavigationLink } from "./navigation-link";
import { NavigationItem } from ".";

const MobileNavigation = ({ navigationItems }: { navigationItems: NavigationItem[] }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  return (
    <div className="relative flex md:hidden">
      <button className="h-auto" type="button" onClick={toggleMenu}>
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform ${open ? 'transform rotate-45 translate-y-1' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform ${open ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      <nav className={`
        bg-white absolute top-14 -right-6 w-dvw
        ${open ? ` max-h-none visible opacity-100 shadow-md` : `max-h-0 invisible opacity-0`}
        transition-all ease-out
      `}>
        <ul className={`
          flex flex-col gap-2 transition-all ease-in px-6 py-2
          ${open ? 'opacity-100 visible':'opacity-0 hidden'}
        `}>
          {
            navigationItems.map(({ text, href }, index) => (
              <NavigationLink key={`nav-${text}=${index}`} text={text} href={href} className="self-end" onClick={closeMenu}/>
            ))
          }
        </ul>
      </nav>
    </div>
  )
};

export default MobileNavigation;
