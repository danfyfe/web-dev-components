import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ParagraphProps, P } from '../components/typography/P';
export default {
  title: 'components/typography/P',
  component: P,
} as Meta;

const Template: StoryFn<ParagraphProps> = (args) => <P {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>Paragraph Text</>
};


