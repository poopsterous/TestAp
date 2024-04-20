const express = require("express");
const { handleGet } = require("../Controllers/iconLinks");

const router = express.Router();

router.route("/:symbol").get(handleGet);

module.exports = router;
