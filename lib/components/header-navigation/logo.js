"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Logo = ({ logo }) => {
    var _a, _b;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "/", "aria-label": logo.label ? logo.label : logo.alt }, { children: (0, jsx_runtime_1.jsx)("img", { alt: logo.alt, src: logo.src, height: (_a = logo.height) !== null && _a !== void 0 ? _a : undefined, width: (_b = logo.width) !== null && _b !== void 0 ? _b : undefined }) })) }));
};
exports.default = Logo;
//# sourceMappingURL=logo.js.map