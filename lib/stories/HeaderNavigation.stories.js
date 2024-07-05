"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const header_navigation_1 = require("../components/header-navigation");
exports.default = {
    title: 'components/header-navigation/header-navigation',
    component: header_navigation_1.HeaderNavigation,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(header_navigation_1.HeaderNavigation, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    logo: {
        src: './next.svg',
        alt: 'NextJS Logo',
        height: 100,
        width: 100
    },
    navigationItems: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Services',
            href: '/services'
        }
    ]
};
//# sourceMappingURL=HeaderNavigation.stories.js.map