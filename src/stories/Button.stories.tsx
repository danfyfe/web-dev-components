import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonProps, Button } from '../components/utils/Button';

export default {
  title: 'components/utils/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>Button Text</>
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  children: <>Button Text</>,
  disabled: true
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: <>Button Text</>,
  inverted: true
};


export const DisabledInverted = Template.bind({});
DisabledInverted.args = {
  children: <>Button Text</>,
  disabled: true,
  inverted: true
};

export const AsLink = Template.bind({});
AsLink.args = {
  children: <>Button Text</>,
  asLink: true
};


