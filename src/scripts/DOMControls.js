const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../assets/icons", true, /\.png$/));

console.log(cache);

const body = document.querySelector("body");
const content = document.getElementById("content");

const playerDataEntry = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("form-overlay");

  const container = document.createElement("div");
  container.classList.add("form-container");

  const form = document.createElement("form");
  form.id = "player-information";

  const headerDiv = document.createElement("div");
  const header = document.createElement("h3");
  header.innerHTML = "Who's playing?";

  headerDiv.appendChild(header);

  const inputDiv = document.createElement("div");
  const label = document.createElement("label");
  label.for = "player-name";
  label.innerHTML = "Enter Your Name";
  const textInput = document.createElement("input");
  textInput.id = "player-name";
  textInput.required = true;

  inputDiv.appendChild(label);
  inputDiv.appendChild(textInput);

  const buttonDiv = document.createElement("div");
  const button = document.createElement("button");
  button.id = "start-button";
  button.innerHTML = "start";

  buttonDiv.appendChild(button);

  form.appendChild(headerDiv);
  form.appendChild(inputDiv);
  form.appendChild(buttonDiv);

  container.appendChild(form);
  overlay.appendChild(container);
  body.appendChild(overlay);

  return { overlay, form, textInput, button };
};

const renderBoard = (parent) => {
  const container = document.createElement("div");
  container.classList.add("gameboard-container");
  const board = document.createElement("div");
  board.classList.add("gameboard");

  for (let y = 10; y >= 1; y -= 1) {
    for (let i = 1; i <= 10; i += 1) {
      const square = document.createElement("div");
      square.dataset.coord = `${i}-${y}`;
      board.appendChild(square);
    }
  }

  container.appendChild(board);
  parent.appendChild(container);

  return board;
};

const shipDrawer = (parent) => {
  const ships = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  const container = document.createElement("div");
  container.id = "ship-drawer";

  ships.map((ship) => {
    const shipDiv = document.createElement("div");
    shipDiv.id = `${ship}-selection`;
    shipDiv.dataset.ship = `${ship}`;
    shipDiv.innerHTML = `${ship}`;
    if (ship === "carrier") {
      shipDiv.classList.add("highlighted-ship");
    }
    container.appendChild(shipDiv);
  });

  parent.appendChild(container);
  const childRefs = [...container.children];
  return { container, childRefs };
};

const highlightShip = (ship) => {
  const allShips = [...document.querySelectorAll("[data-ship]")];
  allShips.forEach((ele) => {
    ele.removeAttribute("class");
  });
  if (ship === "setup complete") {
    return;
  }

  const shipToHighlight = document.querySelector(`[data-ship='${ship}']`);
  shipToHighlight.classList.add("highlighted-ship");
};

const makeAlert = (alert) => {
  const container = document.createElement("div");
  container.classList.add("alert-container");

  const textBox = document.createElement("div");
  textBox.classList.add("alert-textbox");

  const text = document.createElement("h4");
  text.classList.add("alert-text");
  text.innerHTML = `${alert}`;

  textBox.appendChild(text);
  container.appendChild(textBox);
  content.appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 2000);
};

const gameArea = (playerOneName, playerTwoName) => {
  const container = document.createElement("div");
  container.id = "game-area";

  const playerOneSide = document.createElement("div");
  playerOneSide.id = "player-one-side";
  playerOneSide.classList.add("player-half");
  const playerOneTitle = document.createElement("h2");
  playerOneTitle.innerHTML = playerOneName;
  playerOneSide.appendChild(playerOneTitle);
  const playerOneBoard = renderBoard(playerOneSide);
  playerOneBoard.dataset.owner = playerOneName;
  shipDrawer(playerOneSide);
  const playerOneReady = document.createElement("button");
  playerOneReady.innerHTML = "Start Game";
  playerOneReady.id = "player-one-ready";
  playerOneSide.appendChild(playerOneReady);

  const playerTwoSide = document.createElement("div");
  playerTwoSide.id = "player-two-side";
  playerTwoSide.classList.add("player-half");
  const playerTwoTitle = document.createElement("h2");
  playerTwoTitle.innerHTML = playerTwoName;
  playerTwoSide.appendChild(playerTwoTitle);
  const playerTwoBoard = renderBoard(playerTwoSide);
  playerTwoBoard.dataset.owner = playerTwoName;

  container.appendChild(playerOneSide);
  container.appendChild(playerTwoSide);

  content.appendChild(container);

  return {
    container,
    playerOneSide,
    playerTwoSide,
    playerOneBoard,
    playerTwoBoard,
  };
};

const refreshBoards = (gameObj) => {
  for (const keys in cache) {
    // console.log(keys);
  }
  const { playerOneBoard } = gameObj.getBoards();
  const playerOneShips = playerOneBoard.getShipLocations();
  const playerOneShots = playerOneBoard.getShots();

  const playerOneBoardNodes = [
    ...document.getElementsByClassName("gameboard")[0].childNodes,
  ];

  const { playerTwoBoard } = gameObj.getBoards();
  const playerTwoShips = playerTwoBoard.getShipLocations();
  const playerTwoShots = playerTwoBoard.getShots();

  const playerTwoBoardNodes = [
    ...document.getElementsByClassName("gameboard")[1].childNodes,
  ];

  const renderShip = (ships, square) => {
    if (ships.hasOwnProperty(square.dataset.coord)) {
      square.innerHTML = "<div class='stamp-div'></div>";
      // square.innerHTML = `<img class='stamp' src = '${cache["./dash.png"]}'/>`;
    }
  };
  const renderHit = (shotLocations, shipLocations, square) => {
    const coordinate = square.dataset.coord;
    if (shotLocations.includes(coordinate)) {
      if (shipLocations.hasOwnProperty(coordinate)) {
        square.innerHTML = `<img class='stamp' src='${cache["./orange-x.png"]}'/>`;
      } else {
        square.innerHTML = `<img class='stamp' src='${cache["./dash.png"]}'/>`;
      }
    }
  };

  for (const square of playerTwoBoardNodes) {
    // renderShip(playerTwoShips, square);
    renderHit(playerTwoShots, playerTwoShips, square);
  }
  for (const square of playerOneBoardNodes) {
    renderShip(playerOneShips, square);
    renderHit(playerOneShots, playerOneShips, square);
  }
};

export {
  playerDataEntry,
  renderBoard,
  gameArea,
  shipDrawer,
  refreshBoards,
  makeAlert,
  highlightShip,
};
