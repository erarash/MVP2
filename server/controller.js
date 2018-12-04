const { Champ } = require("../database/index.js");

const get = (req, res) => {
  req.query = { q };
  `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${q}.json`,
    (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    };
};

module.exports.get = get;
