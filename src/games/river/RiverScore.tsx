import { RiverCell } from '@/stories/RiverCell';
import { Score } from '../Score';

export class RiverScore extends Score {
  guess: number;
  actual: number;

  constructor(guess: number, actual: number) {
    super();
    this.guess = guess;
    this.actual = actual;
  }

  getScore(): number {
    if (this.guess === this.actual) {
      return 10 + 5 * this.actual;
    } else {
      return 0;
    }
  }

  getScoreTableCell(): JSX.Element {
    return <RiverCell riverScore={this} />;
  }
}
