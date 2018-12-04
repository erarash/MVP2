import React from "react";
import styles from "../css/TopBar.css";

export default function TopBar(props) {
  return (
    <div>
      <img
        className={styles.headerimg}
        src="http://pluspng.com/img-png/league-of-legends-png-league-of-legends-png-image-png-image-309.png"
        height="100"
        width="100"
      />
      <h1 className={styles.title}>ChampSelect</h1>
    </div>
  );
}
