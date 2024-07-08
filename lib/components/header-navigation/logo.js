"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Logo = ({ logo }) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex justify-center items-center" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "/", "aria-label": logo.label ? logo.label : logo.alt }, { children: (0, jsx_runtime_1.jsx)("img", { alt: logo.alt, src: logo.src, height: logo.height, width: logo.width, style: { height: logo.height, width: logo.width } }) })) })));
exports.default = Logo;
//# sourceMappingURL=logo.js.map