"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const H3_1 = require("../components/typography/H3");
exports.default = {
    title: 'components/typography/H3',
    component: H3_1.H3,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(H3_1.H3, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "H3 Text" })
};
//# sourceMappingURL=H3.stories.js.map