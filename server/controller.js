const { Champ } = require("../database/index.js");
const axios = require("axios");

const get = (req, res) => {
  let query = req.query.query;
  axios
    .get(
      `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${query}.json`
    )
    .then(data => {
      console.log(data.data.data);
      res.send(data.data.data[query]);
    })
    .catch(err => console.error(err));
};

module.exports.get = get;
