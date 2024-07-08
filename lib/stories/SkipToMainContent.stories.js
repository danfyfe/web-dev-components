"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const skip_to_main_content_1 = require("../components/a11y/skip-to-main-content");
exports.default = {
    title: 'components/a11y/skip-to-main-content',
    component: skip_to_main_content_1.SkipToMainContent,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(skip_to_main_content_1.SkipToMainContent, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    className: 'text-red'
};
//# sourceMappingURL=SkipToMainContent.stories.js.map