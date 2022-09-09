import React from "react";
import "./App.css";
import TopBar from "./TopBar/TopBar";

function App() {
  return (
    <div id="app" data-testid="app">
      <TopBar title="Battleship" />
    </div>
  );
}

export default App;
