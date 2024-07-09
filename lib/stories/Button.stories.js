"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsLink = exports.DisabledInverted = exports.Inverted = exports.DefaultDisabled = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("../components/utils/Button");
exports.default = {
    title: 'components/utils/Button',
    component: Button_1.Button,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Button Text" })
};
exports.DefaultDisabled = Template.bind({});
exports.DefaultDisabled.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Button Text" }),
    disabled: true
};
exports.Inverted = Template.bind({});
exports.Inverted.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Button Text" }),
    inverted: true
};
exports.DisabledInverted = Template.bind({});
exports.DisabledInverted.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Button Text" }),
    disabled: true,
    inverted: true
};
exports.AsLink = Template.bind({});
exports.AsLink.args = {
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Button Text" }),
    asLink: true
};
//# sourceMappingURL=Button.stories.js.map