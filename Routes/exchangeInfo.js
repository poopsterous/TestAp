const express = require("express");
const { handleGet, handleUpdateGet } = require("../Controllers/exchangeInfo");

const router = express.Router();

router.route("/").get(handleGet);
router.route('/update').get(handleUpdateGet)
module.exports = router;
