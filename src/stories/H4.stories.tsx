import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { H4Props, H4 } from '../components/typography/H4';
export default {
  title: 'components/typography/H4',
  component: H4,
} as Meta;

const Template: StoryFn<H4Props> = (args) => <H4 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>H4 Text</>
};


