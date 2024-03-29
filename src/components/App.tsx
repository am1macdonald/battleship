import React, { useState } from "react";
import "./App.css";
import TopBar from "./TopBar/TopBar";
import PlayerEntry from "./popups/PlayerEntry";

function App() {
  const [initializing, setInitializing] = useState(true);

  function startGame() {
    setInitializing(false);
  }

  return (
    <div id="app" data-testid="app">
      <TopBar
        title="BATTLESHIP"
        newGame={() => {
          window.location.reload();
        }}
      />
      {initializing && (
        <PlayerEntry
          start={() => {
            setInitializing(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
