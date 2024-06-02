
import { Score } from '@/games/Score';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface ScoreTableProps {
  scores: Score[][];
  names: string[];
}

export const ScoreTable: React.FC<ScoreTableProps> = ({ scores, names }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {names.map((player, i) => playerCell(player, scores.map((s) => s[i])))}
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((playerScores, i) => (
            <TableRow key={`scores-${i}`}>
              {playerScores.map((score, j) => (
                <TableCell key={`score-${i}-${j}`}>{score.getScore()}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const playerCell = (name: string, scores: Score[]) => {
  const score = scores.reduce((acc, score) => acc + score.getScore(), 0);

  return (
    <TableCell key={`player-${name}-${score}`}>
      {name}: {score}
    </TableCell>
  );
};
