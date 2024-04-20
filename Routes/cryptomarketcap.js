const express = require("express");
const { handleGet, handlePost } = require("../Controllers/cryptomarketcap");

const router = express.Router();

router.route("/").get(handleGet).post(handlePost);

module.exports = router;
