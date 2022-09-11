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

  function placeShip(name, length, start, end) {
    if (start.x !== end.x || start.y !== end.y) {
      throw new Error("Can't place ships diagonally");
    }

    const getMinMax = () => {
      const max = Math.max[(start.y, end.y)];
      const min = Math.min[(start.y, end.y)];
      if (max > 10) {
        throw new Error("No room!");
      }
      return { min, max };
    };

    try {
      if (start.x === end.x) {
        const { min, max } = getMinMax(start.y, end.y);
        for (let i = min; i <= max; i += 1) {
          shipLocations[`${start.x}, ${i}`] = name;
        }
      }

      if (start.y === end.y) {
        const { min, max } = getMinMax(start.x, end.x);
        for (let i = min; i <= max; i += 1) {
          shipLocations[`${i}, ${start.y}`] = name;
        }
      }
    } catch (error) {
      console.error(error);
      return;
    }

    shipyard[name] = newShip(name, length);
  }

  function recieveAttack(coord) {
    const coordStr = `${coord.x}, ${coord.y}`;

    if (shots.hasOwnProperty(coordStr)) {
      throw new Error("already shot here!");
    }

    if (shipLocations.hasOwnProperty(coordStr)) {
      shipyard.name.directHit();
    }
    return "miss";
  }

  function isFleetSunk() {
    let allSunk = true;
    for (const ship in shipyard) {
      if (!ship.isSunk()) {
        allSunk = false;
      }
    }
    return allSunk;
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

export default BoardFactory;
