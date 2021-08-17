const express = require("express");
const router = express.Router();
const {
    createJC,
    getJC
} = require("./joinController");
const { checkToken } = require("../../middleware/jwt");

router
    .post("/", createJC)
    .get("/", checkToken, getJC);

module.exports = router;