import type { Meta, StoryObj } from '@storybook/react';
import { RiverCell } from './RiverCell';
import { RiverScore } from '@/games/river/RiverScore';
import { ScoreTable } from './ScoreTable';
import { Game } from '@/games/Game';
import { Player } from '@/games/Player';

const meta = {
  title: 'ScoreTable',
  tags: ['autodocs'],
  component: ScoreTable,
} satisfies Meta<typeof ScoreTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnePlayerRiver: Story = {
  args: {
    game: new Game([new Player('Player 1', [new RiverScore(0, 0)])]),
  },
};
export const ThreePlayerRiver: Story = {
  args: {
    game: new Game([
      new Player('Player 1', [
        new RiverScore(0, 0),
        new RiverScore(1, 1),
        new RiverScore(2, 2),
      ]),
      new Player('Player 2', [
        new RiverScore(3, 3),
        new RiverScore(4, 4),
        new RiverScore(5, 5),
      ]),
      new Player('Player 3', [
        new RiverScore(6, 6),
        new RiverScore(7, 7),
        new RiverScore(8, 8),
      ]),
    ]),
  },
};
