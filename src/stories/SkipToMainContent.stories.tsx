import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SkipToMainContent, SkipToMainContentProps } from '../components/a11y/skip-to-main-content';

export default {
  title: 'components/a11y/skip-to-main-content',
  component: SkipToMainContent,
} as Meta;

const Template: StoryFn<SkipToMainContentProps> = (args) => <SkipToMainContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'text-red'
};
