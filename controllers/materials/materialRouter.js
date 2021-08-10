const express = require("express");
const router = express.Router();
const { 
    getMaterial, 
    createMaterial, 
    updateMaterial, 
    deleteMaterial
} = require("./materialController");

router
    .get("/", getMaterial)
    .post("/",createMaterial)
    .put("/", updateMaterial)
    .delete("/", deleteMaterial);

module.exports = router;