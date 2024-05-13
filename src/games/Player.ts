import { Score } from './Score';

export class Player {
  name: string;
  scores: Score[];

  constructor(name: string, scores: Score[] = []) {
    this.name = name;
    this.scores = scores;
  }

  getScore(): number {
    return this.scores.reduce((acc, score) => acc + score.getScore(), 0);
  }
}
