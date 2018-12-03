const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/league");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connected to mongodb"));

const champschema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
  lore: String,
  blurb: String,
  allytips: [String, String, String],
  enemytips: [String, String, String],
  tags: [String, String],
  partype: String,
  info: {
    difficulty: Number
  },
  spells: [
    {
      id: String,
      name: String,
      description: String,
      image: {
        full: String
      }
    },
    {
      id: String,
      name: String,
      description: String,
      image: {
        full: String
      }
    },
    {
      id: String,
      name: String,
      description: String,
      image: {
        full: String
      }
    },
    {
      id: String,
      name: String,
      description: String,
      image: {
        full: String
      }
    }
  ],
  passive: {
    name: String,
    description: String,
    image: {
      full: String
    }
  }
});

const Champ = mongoose.model("champ", champschema);

module.exports = { Champ };
