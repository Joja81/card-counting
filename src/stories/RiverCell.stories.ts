import type { Meta, StoryObj } from '@storybook/react';
import { RiverCell } from './RiverCell';
import { RiverScore } from '@/games/river/RiverScore';

const meta = {
  title: 'River/RiverCell',
  tags: ['autodocs'],
  component: RiverCell,
} satisfies Meta<typeof RiverCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ZeroScore: Story = {
  args: {
    riverScore: new RiverScore(0, 0),
  },
};

export const CorrectScore: Story = {
  args: {
    riverScore: new RiverScore(2, 2),
  },
};

export const WrongScore: Story = {
  args: {
    riverScore: new RiverScore(1, 2),
  },
};
