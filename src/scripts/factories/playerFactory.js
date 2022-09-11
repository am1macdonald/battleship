const Player = (name) => {
  const playerName = name;
  let turn = false;
  const getName = () => {
    return playerName;
  };
  const myTurn = () => {
    turn = true;
  };
  const takeTurn = (coord, board) => {
    if (!turn) {
      throw new Error("not your turn");
    } else if (board.includes(coord)) {
      throw new Error("already shot there");
    } else {
      turn = false;
      return "shot fired";
    }
  };

  return { getName, takeTurn, myTurn };
};

const ComputerBrain = () => {
  let lastHit = "";

  const setLastHit = (coord) => {
    lastHit = coord;
  };
  const getLastHit = () => lastHit;

  const makeOwnChoices = (shotMap) => {
    // let coord;
    // if (lastHit.length > 0) {
    //   const chooseAxis = Math.floor(Math.random() * 2);
    //   const plusOrMinus = Math.floor(Math.random() * 2);
    //   const splitCoord = lastHit.split("-").map((num) => {
    //     return parseInt(num);
    //   }); // sets [x, y]

    //   if (plusOrMinus) {
    //     if (splitCoord[chooseAxis] === 10) {
    //       lastHit = "";
    //       makeOwnChoices(shotMap);
    //       return;
    //     }
    //     splitCoord[chooseAxis] += 1;
    //   } else {
    //     if (splitCoord[chooseAxis] === 1) {
    //       lastHit = "";
    //       makeOwnChoices(shotMap);
    //       return;
    //     }
    //     splitCoord[chooseAxis] -= 1;
    //   }

    //   coord = splitCoord.join("-");
    // } else {
    //   coord = `${Math.floor(Math.random() * 10) + 1}-${
    //     Math.floor(Math.random() * 10) + 1
    //   }`;
    // }
    const coord = `${Math.floor(Math.random() * 10) + 1}-${
      Math.floor(Math.random() * 10) + 1
    }`;
    if (shotMap.includes(coord)) {
      makeOwnChoices(shotMap);
    }
    return coord;
  };

  const randomlyPlaceShips = (board) => {
    if (board.nextShip() === "setup complete") {
      return;
    }
    const nextShip = board.nextShip();
    const chooseAxis = Math.floor(Math.random() * 2); // 0 for x; 1 for y
    const mainAxisCoord = Math.floor(Math.random() * 10) + 1;
    const shipStartCoord = Math.floor(Math.random() * 10) + 1;
    const shipEndCoord = shipStartCoord + board.getShipLengths()[nextShip] - 1;

    if (chooseAxis) {
      board.placeShip(
        nextShip,
        `${shipStartCoord}-${mainAxisCoord}`,
        `${shipEndCoord}-${mainAxisCoord}`
      );
    } else if (!chooseAxis) {
      board.placeShip(
        nextShip,
        `${mainAxisCoord}-${shipStartCoord}`,
        `${mainAxisCoord}-${shipEndCoord}`
      );
    }
    // console.log(chooseAxis, mainAxisCoord, shipStartCoord, shipEndCoord);
    randomlyPlaceShips(board);
  };

  return { makeOwnChoices, randomlyPlaceShips, setLastHit };
};

// const computer = Object.assign(player("computer"), computerMover());
// const computerBoard = newBoard("computer");
// computer.placeOwnShips(computerBoard);

export { Player, ComputerMover };
