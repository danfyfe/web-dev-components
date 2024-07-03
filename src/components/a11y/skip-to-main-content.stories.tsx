import type { Meta, StoryObj } from '@storybook/react';

import SkipToMainContent from './skip-to-main-content';

const meta = {
  component: SkipToMainContent,
} satisfies Meta<typeof SkipToMainContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id"
  }
};