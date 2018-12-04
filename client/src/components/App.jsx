import React from "react";
import axios from "axios";
import TopBar from "./TopBar.jsx";
import ChampSelect from "./ChampSelect.jsx";
import Champion from "./Champion.jsx";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopBar />
        <ChampSelect />
      </div>
    );
  }
}
