import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import styles from "./TopBar.module.scss";

function TopBar(props) {
  return (
    <nav className={`center ${styles.nav}`}>
      <div className={styles.inline}>
        <h1>{props.title}</h1>
      </div>
      <div className={`${styles.mono} ${styles.inline}`}>
        <button>New Game</button>
      </div>
    </nav>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
};

export default TopBar;
