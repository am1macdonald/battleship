import "./stylesheets/reset.css";
import "./stylesheets/style.sass";
import "./assets/sakura-_LHf-WzBYpo-unsplash.jpg";
import { makeAlert, playerDataEntry } from "./scripts/DOMControls";
import startGame from "./scripts/gameLoop";

const onLoad = (() => {
  const dataEntry = playerDataEntry();
  const input = dataEntry.textInput;
  function handleClick(e) {
    e.preventDefault();
    if (!dataEntry.form.checkValidity()) {
      return;
    }
    startGame(input.value);
    dataEntry.overlay.remove();
    e.target.removeEventListener("click", handleClick);
    makeAlert("click to place ships,</br> then press 'Start Game'");
  }

  dataEntry.button.addEventListener("click", handleClick);
})();

// game = newGame("joe", null);
// console.log(game);
// game.playerOneBoard.placeShip("carrier", "1-2", "1-6");
// game.playerOneBoard.placeShip("battleship", "2-1", "2-4");
// game.playerOneBoard.placeShip("cruiser", "3-2", "3-4");
// game.playerOneBoard.placeShip("submarine", "4-1", "4-3");
// game.playerOneBoard.placeShip("destroyer", "6-2", "6-3");
// const killAll = game.playerOneBoard.getShipLocations();

// for (const key in killAll) {
//   console.log(key);
//   game.playerOneBoard.recieveAttack(key);
// }
// console.log(game.playerOneBoard.isFleetSunk());
