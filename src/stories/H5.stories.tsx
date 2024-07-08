import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { H5Props, H5 } from '../components/typography/H5';
export default {
  title: 'components/typography/H5',
  component: H5,
} as Meta;

const Template: StoryFn<H5Props> = (args) => <H5 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>H5 Text</>
};


