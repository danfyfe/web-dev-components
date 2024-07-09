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
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
;
const Button = (_a) => {
    var { className, children, type = "button", asLink, inverted, disabled } = _a, props = __rest(_a, ["className", "children", "type", "asLink", "inverted", "disabled"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: type, disabled: disabled ? true : undefined }, props, { className: `
        bg-primary border-2 border-primary text-white
        p-2 rounded-inner flex justify-center items-center
        ${className ? className : ''}
        ${inverted ? '!bg-white !text-primary' : ''}
        ${asLink ? 'border-none bg-transparent !text-inherit' : ''}
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
      ` }, { children: children })));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map