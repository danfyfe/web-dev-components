"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const P_1 = require("../components/typography/P");
exports.default = {
    title: 'components/typography/P',
    component: P_1.P,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(P_1.P, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Paragraph Text" })
};
//# sourceMappingURL=Paragraph.stories.js.map