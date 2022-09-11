import newBoard from "./boardFactory";
import { ComputerMover, Player } from "./playerFactory";

const NewGame = (board, players) => {
  let stage = "setup";
  const getStage = () => {
    return stage;
  };

  const playerOne = playerOneName ? Player(playerOneName) : null;
  const playerTwo = playerTwoName
    ? Player(playerTwoName)
    : Object.assign(Player("Computer Player"), ComputerMover());
  const playerOneBoard = newBoard(playerOne);
  const playerTwoBoard = newBoard(playerTwo);

  const getBoards = () => {
    return {
      playerOneBoard,
      playerTwoBoard,
    };
  };
  if (playerTwo.getName() === "Computer Player") {
    playerTwo.randomlyPlaceShips(playerTwoBoard);
  }
  let turn = "playerOne";
  const toggleTurn = () => {
    if (turn === "playerOne") {
      turn = "playerTwo";
    } else {
      turn = "playerOne";
    }
  };
  const getTurn = () => {
    return turn;
  };

  const nextGameStage = () => {
    if (stage === "setup") {
      if (
        playerOneBoard.nextShip() === "setup complete" &&
        playerTwoBoard.nextShip() === "setup complete"
      )
        stage = "gameplay";
    }
    return stage;
  };
  const computerTurn = () => {
    setTimeout(() => {
      const choice = playerTwo.makeOwnChoices(playerOneBoard.getShots());

      try {
        const computerResult = playerOneBoard.recieveAttack(choice);
        if (computerResult === "miss") {
          toggleTurn();
          return computerResult;
        }
        if (computerResult === "hit") {
          playerTwo.confirmLastHit(choice);
        }
        if (computerResult === "sunk") {
          playerTwo.confirmLastHit("");
        }

        computerTurn();
        toggleTurn();
        return computerResult;
      } catch (err) {
        console.error(err);
        const computerResult = computerTurn();

        toggleTurn();
        return computerResult;
      }
    }, 500);
  };

  const next = () => {
    if (stage === "setup") {
      // do something
    } else if (stage === "gameplay") {
      // do something different
    }
  };
  return {
    playerOne,
    playerTwo,
    getBoards,
    toggleTurn,
    getTurn,
    next,
    getStage,
    nextGameStage,
    computerTurn,
  };
};

export default NewGame;
