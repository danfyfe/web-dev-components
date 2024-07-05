"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const NavigationLink = ({ text, href, className, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: `
      border-b-2 border-b-transparent hover:border-b-black flex justify-center items-center
      ${className ? className : ''}
    ` }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: href, onClick: onClick }, { children: text })) })));
};
exports.NavigationLink = NavigationLink;
//# sourceMappingURL=navigation-link.js.map