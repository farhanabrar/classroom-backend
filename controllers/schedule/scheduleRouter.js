const express = require("express");
const router = express.Router();
const { 
    getSchedule, 
    createSchedule, 
    updateSchedule, 
    deleteSchedule 
} = require("./scheduleController");

router
    .get("/", getSchedule)
    .post("/", createSchedule)
    .put("/", updateSchedule)
    .delete("/", deleteSchedule);

module.exports = router;

