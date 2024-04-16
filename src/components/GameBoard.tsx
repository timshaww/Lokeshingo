import { useEffect, useState } from "react";
import BingoSquare from "./BingoSquare";

interface Square {
  id?: number;
  value: string;
  clicked: boolean;
}

function shuffleBoard(board: Square[]): Square[] {
  return board.sort(() => Math.random() - 0.5);
}

function GameBoard({ onBingo }: { onBingo: () => void }) {
  const initialBoardState: Square[] = [
    { value: "Kahoot", clicked: false },
    { value: "Assigns 20hrs of qwiklabs", clicked: false },
    { value: "Incoherent diagrams", clicked: false },
    { value: "Uses banking example", clicked: false },
    { value: "Microsoft Teams needs update", clicked: false },
    { value: '"Laptops closed"', clicked: false },
    { value: "Goes off task", clicked: false },
    { value: "References a different class", clicked: false },
    { value: '"Boeing"', clicked: false },
    { value: "Starts class 5 mins late", clicked: false },
    { value: "Offers on campus job", clicked: false },
    { value: "Speed reads slides", clicked: false },
    { value: "Calls someone out by name", clicked: false },
    { value: "Promises a kahoot next class", clicked: false },
    { value: '"Good to know, not need to know"', clicked: false },
    { value: '"India"', clicked: false },
    { value: "Asks why people are absent", clicked: false },
    { value: "Plugs on-campus event", clicked: false },
    { value: "Ends class early", clicked: false },
    { value: "Someone needs clarification", clicked: false },
    { value: '"ATM"', clicked: false },
    { value: "Talks about his past jobs", clicked: false },
    { value: "Wears Apple Watch and Jeans", clicked: false },
    { value: "Draws stick man", clicked: false },
    { value: "Roasts someone", clicked: false },
  ];

  const [boardState, setBoardState] = useState<Square[]>([]);

  useEffect(() => {
    const shuffledBoard = shuffleBoard([...initialBoardState]);
    const boardWithIds = shuffledBoard.map((square, index) => ({
      ...square,
      id: index,
    }));
    setBoardState(boardWithIds);
  }, []);

  const handleClick = (id: number) => {
    const updatedBoardState = boardState.map((square) => {
      if (square.id === id) {
        return { ...square, clicked: !square.clicked };
      }
      return square;
    });

    setBoardState(updatedBoardState); // Update state
    checkForBingo(updatedBoardState, id); // Now pass the updated state to checkForBingo
  };

  const checkForBingo = (updatedBoardState: Square[], id: number) => {
    if (id === 0 || id === 6 || id === 12 || id === 18 || id === 24) {
      if (
        updatedBoardState[0].clicked &&
        updatedBoardState[6].clicked &&
        updatedBoardState[12].clicked &&
        updatedBoardState[18].clicked &&
        updatedBoardState[24].clicked
      ) {
        onBingo();
      }
    }
    if (id === 4 || id === 8 || id === 12 || id === 16 || id === 20) {
      if (
        updatedBoardState[4].clicked &&
        updatedBoardState[8].clicked &&
        updatedBoardState[12].clicked &&
        updatedBoardState[16].clicked &&
        updatedBoardState[20].clicked
      ) {
        onBingo();
      }
    }
    if (id === 0 || id === 1 || id === 2 || id === 3 || id === 4) {
      if (
        updatedBoardState[0].clicked &&
        updatedBoardState[1].clicked &&
        updatedBoardState[2].clicked &&
        updatedBoardState[3].clicked &&
        updatedBoardState[4].clicked
      ) {
        onBingo();
      }
    }
    if (id === 5 || id === 6 || id === 7 || id === 8 || id === 9) {
      if (
        updatedBoardState[5].clicked &&
        updatedBoardState[6].clicked &&
        updatedBoardState[7].clicked &&
        updatedBoardState[8].clicked &&
        updatedBoardState[9].clicked
      ) {
        onBingo();
      }
    }
    if (id === 10 || id === 11 || id === 12 || id === 13 || id === 14) {
      if (
        updatedBoardState[10].clicked &&
        updatedBoardState[11].clicked &&
        updatedBoardState[12].clicked &&
        updatedBoardState[13].clicked &&
        updatedBoardState[14].clicked
      ) {
        onBingo();
      }
    }
    if (id === 15 || id === 16 || id === 17 || id === 18 || id === 19) {
      if (
        updatedBoardState[15].clicked &&
        updatedBoardState[16].clicked &&
        updatedBoardState[17].clicked &&
        updatedBoardState[18].clicked &&
        updatedBoardState[19].clicked
      ) {
        onBingo();
      }
    }
    if (id === 20 || id === 21 || id === 22 || id === 23 || id === 24) {
      if (
        updatedBoardState[20].clicked &&
        updatedBoardState[21].clicked &&
        updatedBoardState[22].clicked &&
        updatedBoardState[23].clicked &&
        updatedBoardState[24].clicked
      ) {
        onBingo();
      }
    }
    if (id === 0 || id === 5 || id === 10 || id === 15 || id === 20) {
      if (
        updatedBoardState[0].clicked &&
        updatedBoardState[5].clicked &&
        updatedBoardState[10].clicked &&
        updatedBoardState[15].clicked &&
        updatedBoardState[20].clicked
      ) {
        onBingo();
      }
    }
    if (id === 1 || id === 6 || id === 11 || id === 16 || id === 21) {
      if (
        updatedBoardState[1].clicked &&
        updatedBoardState[6].clicked &&
        updatedBoardState[11].clicked &&
        updatedBoardState[16].clicked &&
        updatedBoardState[21].clicked
      ) {
        onBingo();
      }
    }
    if (id === 2 || id === 7 || id === 12 || id === 17 || id === 22) {
      if (
        updatedBoardState[2].clicked &&
        updatedBoardState[7].clicked &&
        updatedBoardState[12].clicked &&
        updatedBoardState[17].clicked &&
        updatedBoardState[22].clicked
      ) {
        onBingo();
      }
    }
    if (id === 3 || id === 8 || id === 13 || id === 18 || id === 23) {
      if (
        updatedBoardState[3].clicked &&
        updatedBoardState[8].clicked &&
        updatedBoardState[13].clicked &&
        updatedBoardState[18].clicked &&
        updatedBoardState[23].clicked
      ) {
        onBingo();
      }
    }
    if (id === 4 || id === 9 || id === 14 || id === 19 || id === 24) {
      if (
        updatedBoardState[4].clicked &&
        updatedBoardState[9].clicked &&
        updatedBoardState[14].clicked &&
        updatedBoardState[19].clicked &&
        updatedBoardState[24].clicked
      ) {
        onBingo();
      }
    }
  };

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-2">
      {boardState.map((square) => (
        <BingoSquare
          key={square.id}
          value={square.value}
          clicked={square.clicked}
          onClick={() => handleClick(square.id!)}
          id={square.id!}
        />
      ))}
    </div>
  );
}

export default GameBoard;
