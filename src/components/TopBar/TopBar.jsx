import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import styles from "./TopBar.module.scss";

function TopBar({ title, newGame }) {
  return (
    <nav className={`center ${styles.nav}`}>
      <div className={styles.inline}>
        <h1>{title}</h1>
      </div>
      <div className={`${styles.mono} ${styles.inline}`}>
        <button onClick={newGame}>New Game</button>
      </div>
    </nav>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
  newGame: PropTypes.func,
};

export default TopBar;
