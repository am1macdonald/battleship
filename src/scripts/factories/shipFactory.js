const NewShip = (shipName, length) => {
  const name = shipName;

  const shipLength = length;

  let hitCount = 0;

  const getName = () => {
    return name;
  };

  const isSunk = () => {
    return hitCount === shipLength ? true : false;
  };

  const directHit = () => {
    hitCount += 1;
    return "hit";
  };

  return {
    getName,
    directHit,
    isSunk,
  };
};

export default NewShip;
