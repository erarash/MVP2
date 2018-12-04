const router = require("express").Router();
const controller = require("./controller");

router.route("/champion").get(controller.get);

module.exports = router;
