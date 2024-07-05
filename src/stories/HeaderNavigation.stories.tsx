import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HeaderNavigation, HeaderNavigationProps } from '../components/header-navigation';

export default {
  title: 'components/header-navigation/header-navigation',
  component: HeaderNavigation,
} as Meta;

const Template: StoryFn<HeaderNavigationProps> = (args) => <HeaderNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: {
    src: './assets/youtube.svg',
    alt: 'YouTube Logo'
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
