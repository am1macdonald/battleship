import React from "react";
import PropTypes from "prop-types";
import styles from "./popups.module.scss";

function Rules(props) {
  return (
    <div className={`center ${styles.popup}`}>
      <h2>How to Play:</h2>
      <div>
        <p className={styles.popupFont}>Click each picture only once.</p>
        <br />
        <p className={styles.popupFont}>Cards will shuffle after every click.</p>
      </div>
      <button className={styles.button} onClick={props.toggle}>Start</button>
    </div>
  );
}

Rules.propTypes = {
  toggle: PropTypes.func,
};

export default Rules;
