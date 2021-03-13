const express = require("express");
const router = express.Router();

//Model
const EmailList = require("../models/Model");

//GET
router.get("/", (req, res) => {
    res.send("Succesful! GET");
});

//POST
router.post("/add", (req, res) => {
    res.send("Succesful! PUT");
})

module.exports = router;