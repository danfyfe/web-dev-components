"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MainContainer = ({ children, className }) => ((0, jsx_runtime_1.jsx)("main", Object.assign({ id: "main-content", className: `max-w-7xl ${className ? className : ''}` }, { children: children })));
exports.MainContainer = MainContainer;
//# sourceMappingURL=main.js.map