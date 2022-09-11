import React from "react";
import PropTypes from "prop-types";
import styles from "./popups.module.scss"

function Announcement(props) {
  return (
    <div className={`center ${styles.popup}`}>
      <h2>{props.winOrLose ? "Winner!" : "Better luck next time!"}</h2>
      <button className={styles.button} onClick={props.restart} >Try again!</button>
    </div>
  );
}

Announcement.propTypes = {
  winOrLose: PropTypes.bool,
  restart: PropTypes.func
};

export default Announcement;
