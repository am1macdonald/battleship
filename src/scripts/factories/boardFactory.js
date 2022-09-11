import newShip from "./shipFactory";

const BoardFactory = (ownerName) => {
  const shipyard = {};
  const shipLocations = {};
  const shots = {};
  const owner = ownerName;

  const getShipLocations = () => {
    return shipLocations;
  };

  const getOwnerName = () => {
    return owner;
  };

  const getShots = () => {
    return shots;
  };

  function placeShip(name, start, end) {
  }

  function recieveAttack(coord) {
    const coordStr = `${coord.x}, ${coord.y}`;

    if (Object.hasOwnProperty(coordStr)) {
      throw new Error("already shot here!");
    }

    if (shipLocations.hasOwnProperty(coordStr)) {
      shots.coordStr = 'hit'

      }
      return "hit";
    }
    return "miss";
  }

  function isFleetSunk() {
    let allShipsSunk = true;
    for (const key in shipyard) {
      if (shipyard[key].isSunk() === false) {
        allShipsSunk = false;
      }
    }
    return allShipsSunk;
  }

  return {
    placeShip,
    recieveAttack,
    isFleetSunk,
    getShots,
    getOwnerName,
    getShipLocations,
  };
};

// const bobsBoard = newBoard("bob");
// bobsBoard.placeShip("carrier", "1-1", "1-5");
// bobsBoard.placeShip("battleship", "2-1", "2-4");
// bobsBoard.placeShip("cruiser", "3-2", "3-4");
// bobsBoard.placeShip("submarine", "4-1", "4-3");
// bobsBoard.placeShip("destroyer", "6-2", "6-3");

// bobsBoard.nextShip();

export default BoardFactory;
