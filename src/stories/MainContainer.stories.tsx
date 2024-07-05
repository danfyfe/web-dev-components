import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MainContainer, MainContainerProps } from '../components/containers/main';

export default {
  title: 'components/containers/main-container',
  component: MainContainer,
} as Meta;

const Template: StoryFn<MainContainerProps> = (args) => <MainContainer {...args} />;

export const ClassName = Template.bind({});
ClassName.args = {
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
  children: 'Hello from Main Container'
};
