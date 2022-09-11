import NewBoard from "../boardFactory.js";

it("returns an object", () => {
  expect(typeof NewBoard()).toBe("object");
});

it("returns a shipyard's contents when  a ship is placed", () => {
  const gameboard = NewBoard();

  expect(NewBoard().placeShip("carrier", '2-1', '2-5')).toMatchObject(
    {
      '2-1': false,
      '2-2': false,
      '2-3': false,
      '2-4': false,
      '2-5': false,
    }
  );
});

it("returns a shipyard's contents when  a ship is placed", () => {
  const gameboard = NewBoard();

  expect(NewBoard().placeShip("destroyer", '2-1', '2-2')).toMatchObject(
    {
      '2-1': false,
      '2-2': false
    }
  );  
});

it("returns 'hit' when a ship has been hit", () => {
  const gameboard = NewBoard();
  gameboard.placeShip("carrier", '2-1', '2-5');

  expect(gameboard.recieveAttack([2, 3])).toBe('hit');
});

it("returns 'hit' when a ship has been hit", () => {
  const gameboard = NewBoard();
  gameboard.placeShip("carrier", '2-1', '2-5');

  expect(gameboard.recieveAttack([3, 3])).toBe('miss');
});

it("returns 'hit' when a ship has been hit", () => {
  const gameboard = NewBoard();
  gameboard.placeShip("destroyer", '2-1', '2-2');

  expect(gameboard.recieveAttack([2, 1])).toBe('hit');
});

it("returns an error when shooting the same place twice", () => {
  const gameboard = NewBoard();
  gameboard.placeShip("destroyer", '2-1', '2-2');
  gameboard.recieveAttack([3, 1]);

  expect(() => {
    gameboard.recieveAttack([3, 1]);
  }).toThrow();
});

it("returns an error when shooting the same place twice", () => {
  const gameboard = NewBoard();
  gameboard.placeShip("destroyer", '2-1', '2-2');
  gameboard.recieveAttack([2, 1]);

  expect(() => {
    gameboard.recieveAttack([2, 1]);
  }).toThrow();
});

it("reports when the fleet has been sunk", () => {
  const gameboard = NewBoard();
  gameboard.placeShip("carrier", '2-1', '2-5');
  gameboard.recieveAttack([2, 1]);
  gameboard.recieveAttack([2, 2]);
  gameboard.recieveAttack([2, 3]);
  gameboard.recieveAttack([2, 4]);
  gameboard.recieveAttack([2, 5]);
  gameboard.placeShip("destroyer", '3-1', '3-2');
  gameboard.recieveAttack([3, 1]);
  gameboard.recieveAttack([3, 2]);

  expect(gameboard.isFleetSunk()).toBe(true);
  
});