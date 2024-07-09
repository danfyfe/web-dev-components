"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const H2_1 = require("../components/typography/H2");
exports.default = {
    title: 'components/typography/H2',
    component: H2_1.H2,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(H2_1.H2, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "H2 Text" })
};
//# sourceMappingURL=H2.stories.js.map