import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { H3Props, H3 } from '../components/typography/H3';
export default {
  title: 'components/typography/H3',
  component: H3,
} as Meta;

const Template: StoryFn<H3Props> = (args) => <H3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>H3 Text</>
};


