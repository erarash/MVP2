// import React from "react";
// import styles from "../css/Champion.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import axios from "axios";

// export default class Champion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rolePic:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU7uPA821lSWieZO_seZ04Fqsyi1U3tV_kJ5aEk4vup6NfEmcWg",
//       name: "jhin",
//       title: "virtuoso",
//       tags: ["assasin", "marksman"],
//       partype: "mana",
//       difficulty: "7",
//       splashart:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU7uPA821lSWieZO_seZ04Fqsyi1U3tV_kJ5aEk4vup6NfEmcWg",
//       blurb: "hfhfhfhfhf",
//       lore: "jfjfjffjfjf",
//       allytips: ["tip1", "tip2", "tip3"],
//       enemytips: ["jdjdjdjdjddjd", "hdhdhdhd", "titit"],
//       spells: [
//         {
//           name: "jhin",
//           description: "description",
//           image: {
//             full:
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU7uPA821lSWieZO_seZ04Fqsyi1U3tV_kJ5aEk4vup6NfEmcWg"
//           }
//         },
//         {
//           name: "jhin",
//           description: "descrption",
//           image: {
//             full:
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU7uPA821lSWieZO_seZ04Fqsyi1U3tV_kJ5aEk4vup6NfEmcWg"
//           }
//         },
//         {
//           name: "jhin",
//           description: "description",
//           image: {
//             full:
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU7uPA821lSWieZO_seZ04Fqsyi1U3tV_kJ5aEk4vup6NfEmcWg"
//           }
//         },
//         {
//           name: "jhin",
//           description: "description",
//           image: {
//             full:
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU7uPA821lSWieZO_seZ04Fqsyi1U3tV_kJ5aEk4vup6NfEmcWg"
//           }
//         }
//       ],
//       passive: {
//         name: "jhin",
//         description: "description",
//         image: {
//           full:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU7uPA821lSWieZO_seZ04Fqsyi1U3tV_kJ5aEk4vup6NfEmcWg"
//         }
//       }
//     };
//   }

//   render() {
//     return (
//       <div id={styles.Champion}>
//         <Tabs>
//           <TabList>
//             <Tab>Tips</Tab>
//             <Tab>Lore</Tab>
//             <Tab>Spells</Tab>
//           </TabList>

//           <TabPanel>
//             <h2>Tips</h2>
//             <div id="Tips" className={styles.tabcontent}>
//               Ally Tips:
//               <ul>
//                 <li>{this.state.allytips[0]}</li>
//                 <li>{this.state.allytips[1]}</li>
//                 <li>{this.state.allytips[2]}</li>
//               </ul>
//               Enemy Tips:
//               <ul>
//                 <li>{this.state.enemytips[0]}</li>
//                 <li>{this.state.enemytips[1]}</li>
//                 <li>{this.state.enemytips[2]}</li>
//               </ul>
//             </div>
//           </TabPanel>
//           <TabPanel>
//             <h2>Lore</h2>
//             <div id="Lore" className={styles.tabcontent}>
//               <p>{this.state.lore}</p>
//             </div>
//           </TabPanel>
//           <TabPanel>
//             <h2>Spells</h2>
//             <div id="Spells" className={styles.tabcontent}>
//               <h3>Spells:</h3>
//               <div className={styles.Q}>
//                 Q: <p>{this.state.spells[0].name}</p>
//                 {this.state.spells[0].description}
//                 <img src={this.state.spells[0].image.full} />
//               </div>
//               <div className={styles.W}>
//                 W: <p>{this.state.spells[1].name}</p>
//                 {this.state.spells[1].description}
//                 <img src={this.state.spells[1].image.full} />
//               </div>
//               <div className={styles.E}>
//                 E: <p>{this.state.spells[2].name}</p>
//                 {this.state.spells[2].description}
//                 <img src={this.state.spells[2].image.full} />
//               </div>
//               <div className={styles.R}>
//                 R: <p>{this.state.spells[3].name}</p>
//                 {this.state.spells[3].description}
//                 <img src={this.state.spells[3].image.full} />
//               </div>
//               <div className={styles.passive}>
//                 Passive: <p>{this.state.passive.name}</p>
//                 {this.state.passive.description}
//                 <img src={this.state.passive.image.full} />
//               </div>
//             </div>
//           </TabPanel>
//         </Tabs>
//       </div>
//     );
//   }
// }
