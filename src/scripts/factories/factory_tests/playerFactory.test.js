import {Player, ComputerMover } from '../playerFactory'

it ("returns its name", () => {
  const bob = Player('bob');
  expect(bob.getName()).toBe('bob')
})

it ("returns its name", () => {
  const pete = Player('pete');
  expect(pete.getName()).toBe('pete')
})

it ("waits its turn", () => {
  const sue = Player('sue');
  expect(() => {
    sue.takeTurn(null, null).toThrow()
  })
})

const fakeBoard = ['1-2']

it ("takes its turn", () => {
  const sue = Player('sue');
  sue.myTurn()
  expect(sue.takeTurn('1-1', fakeBoard)).toBe('splash')
})

it ("doesn't strike the same place twice", () => {

  const mary = Player('mary');

  mary.myTurn()
  expect(() => {
    mary.takeTurn('1-2', fakeBoard).toThrow();

  })
})

it ('can be a computer', () => {
  const computerBob = Object.assign(Player('bob'), ComputerMover())

  expect(computerBob).toHaveProperty('makeOwnChoices');
})