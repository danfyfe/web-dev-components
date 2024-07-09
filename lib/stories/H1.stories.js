"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const H1_1 = require("../components/typography/H1");
exports.default = {
    title: 'components/typography/H1',
    component: H1_1.H1,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(H1_1.H1, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "H1 Text" })
};
//# sourceMappingURL=H1.stories.js.map