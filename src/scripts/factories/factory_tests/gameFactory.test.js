import NewGame from "../gameFactory.js";

// newGame tests
test("returns a new game", () => {
  expect(typeof NewGame()).toBe("object");
});

test('has a gameboards', () => {
  const game = NewGame('joe', 'blow')

  expect(game.getBoards()).toHaveProperty('playerOneBoard')
})