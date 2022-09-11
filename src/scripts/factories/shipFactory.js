const NewShip = (shipName, coordinates) => {
  const name = shipName;

  const hitMap = {};

  coordinates.foreach((coord) => {
    hitMap[coord] = null;
  });

  const getName = () => {
    return name;
  };

  const isSunk = () => {
    let sunk = false;

    for (let coordinate in hitMap) {
      if (hitMap[coordinate]) {
        sunk = true;
      }
    }
    return sunk;
  };

  const directHit = (coordinate) => {

  };

  return {
    getName,
    directHit,
    isSunk,
  };
};

export default NewShip;
