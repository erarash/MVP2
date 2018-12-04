import React from "react";
import styles from "../css/ChampSelect.css";
import axios from "axios";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class ChampSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      name: "Enter Champion",
      title: " ",
      image: " ",
      lore: " ",
      blurb: " ",
      allytips: [],
      enemytips: [],
      tags: [],
      partype: " ",
      info: {},
      spells: [{}, {}, {}, {}],
      spellImage: "",
      passive: {},
      champImg: "https://pbs.twimg.com/media/Dk0mzaNXsAAoUrl.png"
    };
    this.handleInput = this.handleInput.bind(this);
    this.getChampData = this.getChampData.bind(this);
  }

  getChampData() {
    axios
      .get(`/api/champion`, {
        params: {
          query: this.state.query
        }
      })
      .then(data => {
        console.log(data.data, "this is data");
        this.setState({
          rolePic: data.data,
          name: data.data.id,
          title: data.data.title,
          tags: data.data.tags,
          partype: data.data.partype,
          difficulty: data.data.info.difficulty,
          splashart: data.data.image.full,
          blurb: data.data.blurb,
          lore: data.data.lore,
          allytips: data.data.allytips,
          enemytips: data.data.enemytips,
          spells: data.data.spells,
          passive: data.data.passive
        });
        this.setState({
          champImg: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
            this.state.name
          }_0.jpg`
        });
      })
      .catch(err => console.error(err));
  }

  handleInput(e) {
    this.setState({
      query: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div>
          <form>
            <h2 className={styles.inputHeader}> WHO DO YOU WANT TO PLAY?</h2>
            <input
              className={styles.input}
              type="text"
              onChange={e => this.handleInput(e)}
            />
          </form>
          <input
            className={styles.button}
            type="submit"
            value="Lets Go!"
            onClick={this.getChampData}
          />
        </div>
        <div id={styles.Champion}>
          <div className={styles.header}>
            <div className={styles.name}>
              {this.state.name}
              <br />
              <div className={styles.title}>{this.state.title}</div>
            </div>
          </div>
          <div className={styles.champImg}>
            <img src={this.state.champImg} />
          </div>

          <Tabs>
            <TabList>
              <Tab className={styles.Tips}>Tips</Tab>

              <Tab className={styles.Lore}>Lore</Tab>

              <Tab className={styles.Spells}>Spells</Tab>
            </TabList>

            <TabPanel>
              <h2 className={styles.tipstitle}>Tips</h2>
              <div id="Tips" className={styles.tabcontent}>
                Ally Tips:
                <ul>
                  <li>{this.state.allytips[0]}</li>
                  <li>{this.state.allytips[1]}</li>
                  <li>{this.state.allytips[2]}</li>
                </ul>
                Enemy Tips:
                <ul>
                  <li>{this.state.enemytips[0]}</li>
                  <li>{this.state.enemytips[1]}</li>
                  <li>{this.state.enemytips[2]}</li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className={styles.loretitle}>Lore</h2>
              <div id="Lore" className={styles.tabcontent}>
                <p className={styles.longlore}>{this.state.lore}</p>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className={styles.spellstitle}>Spells</h2>
              <div id="Spells" className={styles.tabcontent}>
                <div className={styles.spellLetter}>
                  Q:{" "}
                  <p className={styles.spellName}>
                    {this.state.spells[0].name}
                  </p>
                  <p className={styles.spellDescription}>
                    {this.state.spells[0].description}
                  </p>
                  <img src={this.state.spellImage} />
                </div>
                <div className={styles.spellLetter}>
                  W:{" "}
                  <p className={styles.spellName}>
                    {this.state.spells[1].name}
                  </p>
                  <p className={styles.spellDescription}>
                    {this.state.spells[1].description}
                  </p>
                  <img src={this.state.spellImage} />
                </div>
                <div className={styles.spellLetter}>
                  E:{" "}
                  <p className={styles.spellName}>
                    {this.state.spells[2].name}
                  </p>
                  <p className={styles.spellDescription}>
                    {this.state.spells[2].description}
                  </p>
                  <img src={this.state.spellImage} />
                </div>
                <div className={styles.spellLetter}>
                  R:{" "}
                  <p className={styles.spellName}>
                    {this.state.spells[3].name}
                  </p>
                  <p className={styles.spellDescription}>
                    {this.state.spells[3].description}
                  </p>
                  <img src={this.state.spellImage} />
                </div>
                <div className={styles.spellLetter}>
                  Passive:{" "}
                  <p className={styles.spellName}>{this.state.passive.name}</p>
                  <p className={styles.spellDescription}>
                    {this.state.passive.description}
                  </p>
                  <img src={this.state.passiveImg} />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
