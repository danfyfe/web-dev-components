"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipToMainContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SkipToMainContent = ({ id, className }) => (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `#${id}`, className: `absolute top-0 -left-[99999px] focus-visible:left-5 ${className ? className : ''}` }, { children: "Skip to main content" }));
exports.SkipToMainContent = SkipToMainContent;
//# sourceMappingURL=skip-to-main-content.js.map