"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_link_1 = require("./navigation-link");
const MobileNavigation = ({ navigationItems }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative flex md:hidden" }, { children: [(0, jsx_runtime_1.jsxs)("button", Object.assign({ className: "h-auto", type: "button", onClick: toggleMenu }, { children: [(0, jsx_runtime_1.jsx)("span", { className: `block w-6 h-0.5 bg-black mb-1 transition-transform ${open ? 'transform rotate-45 translate-y-1' : ''}` }), (0, jsx_runtime_1.jsx)("span", { className: `block w-6 h-0.5 bg-black mb-1 transition-transform ${open ? 'opacity-0' : ''}` }), (0, jsx_runtime_1.jsx)("span", { className: `block w-6 h-0.5 bg-black mb-1 transition-transform ${open ? 'transform -rotate-45 -translate-y-2' : ''}` })] })), (0, jsx_runtime_1.jsx)("nav", Object.assign({ className: `
        bg-white absolute top-14 -right-6 w-dvw
        ${open ? ` max-h-none visible opacity-100 shadow-md` : `max-h-0 invisible opacity-0`}
        transition-all ease-out
      ` }, { children: (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: `
          flex flex-col gap-2 transition-all ease-in px-6 py-2
          ${open ? 'opacity-100 visible' : 'opacity-0 hidden'}
        ` }, { children: navigationItems.map(({ text, href }, index) => ((0, jsx_runtime_1.jsx)(navigation_link_1.NavigationLink, { text: text, href: href, className: "self-end", onClick: closeMenu }, `nav-${text}=${index}`))) })) }))] })));
};
exports.default = MobileNavigation;
//# sourceMappingURL=mobile-navigation.js.map