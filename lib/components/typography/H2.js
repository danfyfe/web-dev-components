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
exports.H2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
;
const H2 = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return ((0, jsx_runtime_1.jsx)("h2", Object.assign({}, props, { className: `
      text-h2 font-subheading
      ${className ? className : ''}` }, { children: children })));
};
exports.H2 = H2;
//# sourceMappingURL=H2.js.map