"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderNavigation = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const logo_1 = __importDefault(require("./logo"));
const desktop_navigation_1 = __importDefault(require("./desktop-navigation"));
const mobile_navigation_1 = __importDefault(require("./mobile-navigation"));
;
;
;
const HeaderNavigation = ({ navigationItems, logo }) => {
    return ((0, jsx_runtime_1.jsx)("header", Object.assign({ className: "w-full shadow-md" }, { children: (0, jsx_runtime_1.jsxs)("nav", Object.assign({ className: "max-w-7xl h-20 w-full m-auto p-6 flex justify-between" }, { children: [(0, jsx_runtime_1.jsx)(logo_1.default, { logo: logo }), (0, jsx_runtime_1.jsx)(desktop_navigation_1.default, { navigationItems: navigationItems }), (0, jsx_runtime_1.jsx)(mobile_navigation_1.default, { navigationItems: navigationItems })] })) })));
};
exports.HeaderNavigation = HeaderNavigation;
//# sourceMappingURL=index.js.map