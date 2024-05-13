import { Game } from '@/games/Game';
import { Player } from '@/games/Player';
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
  game: Game;
}

export const ScoreTable: React.FC<ScoreTableProps> = ({ game }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {game.players.map((player) => playerCell(player))}
          </TableRow>
        </TableHead>
        <TableBody>
          {game.getScores().map((roundScores, i) => (
            <TableRow key={i}>
              {roundScores.map((score, j) => (
                <TableCell key={j}>{score.getScoreTableCell()}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const playerCell = (player: Player) => {
  return (
    <TableCell>
      {player.name}: {player.getScore()}
    </TableCell>
  );
};
