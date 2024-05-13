import { RiverScore } from '@/games/river/RiverScore';
import { Grid, TableCell } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface RiverCellProps {
  riverScore: RiverScore;
}

export const RiverCell: React.FC<RiverCellProps> = ({ riverScore }) => {
  return (
    <TableCell align='center'>
      <h3>{riverScore.getScore()}</h3>
      <span>
        {riverScore.guess} <FontAwesomeIcon icon={faArrowRight} />{' '}
        {riverScore.actual}
      </span>
    </TableCell>
  );
};
