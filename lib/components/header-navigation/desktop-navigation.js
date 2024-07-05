"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_link_1 = require("./navigation-link");
const DesktopNavigation = ({ navigationItems }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "hidden md:flex" }, { children: (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "flex gap-10" }, { children: navigationItems.map(({ text, href }, index) => ((0, jsx_runtime_1.jsx)(navigation_link_1.NavigationLink, { text: text, href: href }, `nav-${text}=${index}`))) })) })));
};
exports.default = DesktopNavigation;
//# sourceMappingURL=desktop-navigation.js.map