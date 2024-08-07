"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const NavigationLink = (_a) => {
    var { text, href, className, onClick } = _a, props = __rest(_a, ["text", "href", "className", "onClick"]);
    return ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: `
      border-b-2 border-b-transparent hover:border-b-black flex justify-center items-center
      text-link
      ${className ? className : ''}
    ` }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({}, props, { href: href, onClick: onClick }, { children: text })) })));
};
exports.NavigationLink = NavigationLink;
//# sourceMappingURL=navigation-link.js.map