import type { Meta, StoryObj } from '@storybook/react';
import { RiverEntry } from './RiverEntry';

const meta = {
    title: 'River/RiverEntry',
    tags: ['autodocs'],
    component: RiverEntry,
} satisfies Meta<typeof RiverEntry>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        names: ['Player 1', 'Player 2'],
        cardNumber: 5,
        addScore: (scores) => {
            console.log(scores);
        }
    },
};

export const ShowError: Story = {
    args: {
        names: ['Player 1', 'Player 2'],
        cardNumber: 0,
        addScore: (scores) => {
            console.log(scores);
        }
    },
};