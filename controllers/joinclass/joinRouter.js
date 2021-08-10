const express = require("express");
const router = express.Router();
const {
    createJC
} = require("./joinController");

router
    .post("/", createJC)

module.exports = router;