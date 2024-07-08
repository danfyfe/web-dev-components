import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { H6Props, H6 } from '../components/typography/H6';
export default {
  title: 'components/typography/H6',
  component: H6,
} as Meta;

const Template: StoryFn<H6Props> = (args) => <H6 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>H6 Text</>
};


