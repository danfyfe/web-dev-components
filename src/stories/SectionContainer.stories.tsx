import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SectionContainer, SectionContainerProps } from '../components/containers/section';
export default {
  title: 'components/containers/section-container',
  component: SectionContainer,
} as Meta;

const Template: StoryFn<SectionContainerProps> = (args) => <SectionContainer {...args} />;

export const ClassName = Template.bind({});
ClassName.args = {
  id:'section-01',
  className: 'text-red-500 text-xl',
  children: <>
    <h1>Heading</h1>
    <div>
      <p>Paragraph</p>
      <p>Another paragraph</p>
    </div>
  </>
};

export const HTML = Template.bind({});
HTML.args = {
  children: <>
    <h1>Heading</h1>
    <div>
      <p>Paragraph</p>
      <p>Another paragraph</p>
    </div>
  </>
};

export const Text = Template.bind({});
Text.args = {
  children: 'Hello from Section Container'
};
