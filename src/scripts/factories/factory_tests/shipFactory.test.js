import NewShip from "../shipFactory.js";

// NewShip tests
test("returns an object", () => {
  const bob = NewShip('bob', 4, '2-1', '2-2');


  expect(typeof bob).toBe("object");

});


test("returns ship with correct name", () => {
  const bob = NewShip('bob', 4, '2-1', '2-2');

  expect(bob.getName())
  .toBe('bob');

});


test("returns ship with correct spaces", () => {

  expect(NewShip(null, 4, '2-1', '2-4')
  .getLength())
  .toBe(4);

});


test("takes a hit", () => {

  const bob = NewShip("bob", 4, '2-2', '2-5');

  expect(bob.directHit([2, 2]))
  .toMatchObject(
    {
      '2-2': true,
      '2-3': false,
      '2-4': false,
      '2-5': false,    
    }
  )
});

test("takes another hit", () => {

  const bob = NewShip("bob", 4, '2-2', '2-5');

  expect(bob.directHit([2, 5]))
  .toMatchObject(

    {
      '2-2': false,
      '2-3': false,
      '2-4': false,
      '2-5': true,    
    }
  )
});

test("ship sinks", () => {

  const bob = NewShip("bob", 1, '2-2', '2-2');

  bob.directHit([2, 2]);

  expect(bob.isSunk()).toBe(true)

});

test("ship doesn't sink after until enough hits ", () => {

  const bob = NewShip("bob", 4, '2-2', '2-5');

  bob.directHit([2, 2]);
  bob.directHit([2, 3]);
  bob.directHit([2, 5]);

  expect(bob.isSunk()).toBe(false)

});

test("ship sinks after multiple hits ", () => {

  const bob = NewShip("bob", 4, '2-2', '2-5');

  bob.directHit([2, 2]);
  bob.directHit([2, 3]);
  bob.directHit([2, 4]);
  bob.directHit([2, 5]);

  expect(bob.isSunk()).toBe(true)

});


// test("ship has hitmap works in x-dir", () => {

//   const bob = NewShip("bob", 4, {
//     start: { x: 2, y: 2 },
//     end: { x: 5, y: 2 },
//   });
//   expect(bob.getHitMap())
//     .toMatchObject(
//     {
//       1: {
//         coord: [2, 2],
//         hit: false
//       },
//       2: {
//         coord: [3, 2],
//         hit: false
//       },
//       3: {
//         coord: [4, 2],
//         hit: false
//       },
//       4: {
//         coord: [5, 2],
//         hit: false
//       },
    
//     }
//   )
// });

// test("ship has hitmap works in y-dir", () => {

//   const bob = NewShip("bob", 4, {
//     start: { x: 2, y: 2 },
//     end: { x: 2, y: 5 },
//   });
//   expect(bob.getHitMap())
//     .toMatchObject(
//     {
//       1: {
//         coord: [2, 2],
//         hit: false
//       },
//       2: {
//         coord: [2, 3],
//         hit: false
//       },
//       3: {
//         coord: [2, 4],
//         hit: false
//       },
//       4: {
//         coord: [2, 5],
//         hit: false
//       },
    
//     }
//   )
// });