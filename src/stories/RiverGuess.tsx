import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { Dispatch, FormEventHandler, SetStateAction, useEffect, useState } from "react";
import WarningIcon from '@mui/icons-material/Warning';

interface RiverGuessProps {
    names: string[];
    cardNumber: number;
    guesses: number[];
    setGuesses: Dispatch<SetStateAction<number[]>>
    guessesValid: boolean;
    guessesSubmitted: boolean;
}

export const RiverGuess: React.FC<RiverGuessProps> = ({ names, cardNumber, guesses, setGuesses, guessesSubmitted, guessesValid }) => {

    return (
        <TableRow>
            {guesses.map((guess, i) => (
                <TableCell key={`player-${i}-${names[i]}-guess-${guess}`}>
                    <Stack direction="row" spacing={1}>
                        <input type="number" value={guess} min={0} max={cardNumber}
                            onChange={(e) => {
                                let input = parseInt(e.target.value);
                                const value = isNaN(input) ? 0 : input;

                                const newGuesses = [...guesses];
                                newGuesses[i] = value
                                setGuesses(newGuesses);
                            }
                            }
                            readOnly={guessesSubmitted}
                        />
                        {
                            !guessesValid && i === guesses.length - 1 && (
                                <Tooltip title="The sum of guesses can not equal the number of cards">
                                    <WarningIcon color="error" />
                                </Tooltip>
                            )
                        }
                    </Stack>
                </TableCell>
            ))}
        </TableRow>
    )


}