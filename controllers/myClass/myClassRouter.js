const express = require("express");
const router = express.Router();
const {
    getClass,
    getAllClass,
    createClass,
    updateClass,
    deleteClass
} = require("./MyClassController");

router
    .get("/", getClass)
    .get("/allClass", getAllClass)
    .post("/", createClass)
    .put("/", updateClass)
    .delete("/", deleteClass);

module.exports = router;