import NewShip from "../shipFactory.js";

// NewShip tests
test("returns an object", () => {
  const bob = NewShip("bob", 4);

  expect(typeof bob).toBe("object");
});

test("returns ship with correct name", () => {
  const bob = NewShip("bob", 4);

  expect(bob.getName()).toBe("bob");
});

test("takes a hit", () => {
  const bob = NewShip("bob", 4);

  expect(bob.directHit()).toBe("hit");
});

test("ship sinks", () => {
  const bob = NewShip("bob", 1);

  bob.directHit();

  expect(bob.isSunk()).toBe(true);
});

test("ship doesn't sink after until enough hits", () => {
  const bob = NewShip("bob", 4);

  bob.directHit();
  bob.directHit();
  bob.directHit();

  expect(bob.isSunk()).toBe(false);
});
