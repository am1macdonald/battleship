import React from "react";
import PropTypes from "prop-types";
import styles from "./popups.module.scss";

function PlayerEntry({ start }) {
  return (
    <div className={`center ${styles.popup}`}>
      <h2>Enter Your Name:</h2>
      <div>
        <input type="text" name="player-name" id="" />
        <button className={styles.button} onClick={start}>
          Start
        </button>
      </div>
    </div>
  );
}

PlayerEntry.propTypes = {
  start: PropTypes.func,
};

export default PlayerEntry;
