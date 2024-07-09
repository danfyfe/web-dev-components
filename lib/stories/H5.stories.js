"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const H5_1 = require("../components/typography/H5");
exports.default = {
    title: 'components/typography/H5',
    component: H5_1.H5,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(H5_1.H5, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "H5 Text" })
};
//# sourceMappingURL=H5.stories.js.map