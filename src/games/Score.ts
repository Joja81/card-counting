export abstract class Score {
  abstract getScore(): number;

  abstract getScoreTableCell(): JSX.Element;
}
