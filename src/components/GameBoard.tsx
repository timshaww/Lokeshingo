import { useState } from 'react';
import BingoSquare from './BingoSquare';

interface Square {
    id: string;
    value: string;
    clicked: boolean; 
}

function shuffleBoard(board: Square[]): Square[] {
    return board.sort(() => Math.random() - 0.5);
}

function GameBoard() {
    const initialBoardState: Square[] = [
        { id: '1', value: "Assigns 20hrs of qwiklabs", clicked: false },
        { id: '2', value: "Kahoot", clicked: false },
        { id: '3', value: "Incoherent diagrams", clicked: false },
        { id: '4', value: "Uses banking example", clicked: false },
        { id: '5', value: "Microsoft Teams needs update", clicked: false },
        { id: '6', value: "\"Laptops closed\"", clicked: false },
        { id: '7', value: "Goes off task", clicked: false },
        { id: '8', value: "References one class in other class", clicked: false },
        { id: '9', value: "\"Boeing\"", clicked: false },
        { id: '10', value: "Starts class 5 mins late" , clicked: false }, 
        { id: '11', value: "Offers on campus job", clicked: false },
        { id: '12', value: 'Speed reads slides', clicked: false },
        { id: '13', value: 'Calls someone out', clicked: false },
        { id: '14', value: 'Kahoot next class', clicked: false },
        { id: '15', value: '\"Good to know, not need to know\"', clicked: false },
        { id: '16', value: '\"India\"', clicked: false },
        { id: '17', value: 'Asks why people are absent', clicked: false },
        { id: '18', value: 'Plugs on-campus event', clicked: false },
        { id: '19', value: 'Ends class early', clicked: false },
        { id: '20', value: 'Someone needs clarification', clicked: false },
        { id: '21', value: '\"ATM\"', clicked: false },
        { id: '22', value: 'Talks about his past jobs', clicked: false },
        { id: '23', value: 'Doesn\'t wear his Apple Watch', clicked: false },
        { id: '24', value: 'Ends class 5mins early', clicked: false },
        { id: '25', value: 'Roasts someone', clicked: false }
    ];

    const [boardState, setBoardState] = useState<Square[]>(shuffleBoard(initialBoardState));

    const handleClick = (id: string) => {
        setBoardState(prevState => {
            return prevState.map(square => {
                if (square.id === id) {
                    return { ...square, clicked: !square.clicked };
                }
                return square;
            });
        });
    }

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-2" >
            {boardState.map((square) => (
                <BingoSquare
                    key={square.id}
                    value={square.value}
                    id={square.id}
                    clicked={square.clicked}
                    onClick={() => handleClick(square.id)} 

                />
            ))}

        </div>
    )
}

export default GameBoard;