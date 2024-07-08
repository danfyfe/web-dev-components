import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { H2Props, H2 } from '../components/typography/H2';
export default {
  title: 'components/typography/H2',
  component: H2,
} as Meta;

const Template: StoryFn<H2Props> = (args) => <H2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>H2 Text</>
};


