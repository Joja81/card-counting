import { Player } from './Player';
import { Score } from './Score';

export class Game {
  players: Player[];

  constructor(players: Player[]) {
    this.players = players;
  }

  getScores(): Score[][] {
    let scores = this.players.map((player) => player.scores);

    let transposedScores: Score[][] = [];
    for (let i = 0; i < this.players[0].scores.length; i++) {
      let roundScores: Score[] = [];
      for (let j = 0; j < this.players.length; j++) {
        roundScores.push(this.players[j].scores[i]);
      }
      transposedScores.push(roundScores);
    }
    return transposedScores;
  }
}
