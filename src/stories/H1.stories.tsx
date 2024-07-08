import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { H1Props, H1 } from '../components/typography/H1';
export default {
  title: 'components/typography/H1',
  component: H1,
} as Meta;

const Template: StoryFn<H1Props> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>H1 Text</>
};


