import { RiverScore } from "@/games/river/RiverScore";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { RiverGuess } from "./RiverGuess";

interface RiverEntryProps {
    names: string[];
    cardNumber: number;
    addScore: (scores: RiverScore[]) => void;
}

export const RiverEntry: React.FC<RiverEntryProps> = ({ names, cardNumber, addScore }) => {

    const [guesses, setGuesses] = useState<(number)[]>(new Array(names.length).fill(0));

    const [guessesValid, setGuessesValid] = useState(true);

    const [guessesSubmitted, setGuessesSubmitted] = useState(false);

    useEffect(() => {
        setGuessesValid(guesses.every((g) => g !== null) && guesses.reduce((acc, g) => acc! + (g ?? 0), 0) !== cardNumber);
    }, [guesses])

    const [scores, setScores] = useState<(number | null)[]>(new Array(names.length).fill(null));


    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {names.map((name, i) => (
                                <TableCell key={`player-${name}-${i}`}>
                                    {name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <RiverGuess names={names} cardNumber={cardNumber} guesses={guesses.map((g) => g ?? 0)} setGuesses={setGuesses} guessesSubmitted={guessesSubmitted} guessesValid={guessesValid} />
                    </TableBody>
                </Table>
            </TableContainer>

            {
                !guessesSubmitted && (
                    <button disabled={!guessesValid} onClick={() => { setGuessesSubmitted(true) }}>
                        Submit Guesses
                    </button>
                )
            }
        </div>

    )
}

