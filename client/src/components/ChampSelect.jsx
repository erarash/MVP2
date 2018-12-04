import React from "react";
import styles from "../css/ChampSelect.css";

export default class ChampSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <h2 className={styles.inputHeader}> WHO DO YOU WANT TO PLAY?</h2>
            <input className={styles.input} type="text" />
          </form>
          <input className={styles.button} type="submit" value="Lets Go!" />
        </div>
      </div>
    );
  }
}
