const express = require("express");
const router = express.Router();
const {
    getClass,
    getAllClass,
    createClass,
    updateClass,
    deleteClass
} = require("./MyClassController");
const { checkToken } = require("../../middleware/jwt");
router
    .get("/", checkToken, getClass)
    .get("/allClass", getAllClass)
    .post("/", createClass)
    .put("/", updateClass)
    .delete("/", deleteClass);

module.exports = router;