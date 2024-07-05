"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.HTML = exports.ClassName = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const main_1 = require("../components/containers/main");
exports.default = {
    title: 'components/containers/main-container',
    component: main_1.MainContainer,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(main_1.MainContainer, Object.assign({}, args));
exports.ClassName = Template.bind({});
exports.ClassName.args = {
    className: 'text-red-500 text-xl',
    children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Heading" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Paragraph" }), (0, jsx_runtime_1.jsx)("p", { children: "Another paragraph" })] })] })
};
exports.HTML = Template.bind({});
exports.HTML.args = {
    children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Heading" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Paragraph" }), (0, jsx_runtime_1.jsx)("p", { children: "Another paragraph" })] })] })
};
exports.Text = Template.bind({});
exports.Text.args = {
    children: 'Hello from Main Container'
};
//# sourceMappingURL=MainContainer.stories.js.map