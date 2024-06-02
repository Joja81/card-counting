import type { Meta, StoryObj } from '@storybook/react';
import { RiverCell } from './RiverCell';
import { RiverScore } from '@/games/river/RiverScore';
import { ScoreTable } from './ScoreTable';

const meta = {
  title: 'ScoreTable',
  tags: ['autodocs'],
  component: ScoreTable,
} satisfies Meta<typeof ScoreTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnePlayerRiver: Story = {
  args: {
    scores: [
      [new RiverScore(0, 0)],
    ],
    names: ['Player 1'],
  },
};
export const ThreePlayerRiver: Story = {
  args: {
    scores: [
       [
        new RiverScore(0, 0),
        new RiverScore(1, 1),
        new RiverScore(2, 2),
      ],
      [
        new RiverScore(3, 3),
        new RiverScore(4, 4),
        new RiverScore(5, 5),
      ],
      [
        new RiverScore(6, 6),
        new RiverScore(7, 7),
        new RiverScore(8, 8),
      ],
    ],
    names: ['Player 1', 'Player 2', 'Player 3'],
  },
};
