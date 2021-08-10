const express = require("express");
const router = express.Router();
const { 
    getAllUser,
    getUser, 
    createUser, 
    updateUser, 
    deleteUser 
} = require("./userController");
const { checkToken } = require("../../middleware/jwt");
const { postValidator, runValidation } = require("./userValidator");

router
    .get("/alluser", getAllUser)
    .get("/", checkToken, getUser)
    .post("/", postValidator, runValidation, createUser)
    .put("/", updateUser)
    .delete("/", deleteUser);

module.exports = router;