const express = require("express");
const router = express.Router();

//Model
const Email = require("../models/Model");

//GET
router.get("/", (req, res) => {
    Email.find({})
      .then((data) => res.json(data))
      .catch((err) => console.log("Error GET: ", err));
});

//POST
router.post("/add", (req, res) => {
    const { email } = req.body;
    const newEmail = new Email({ email });
    newEmail.save();
    res.json(newEmail);

    // if (!email) return res.sendStatus(400).json({ msg: "Please Enter an email" });
    // EmailList.findOne({ email }).then((email) => {
    //     if (email) return res.sendStatus(400).json({ msg: "Email has already been added to our list" });
    //     const newEmail = new EmailList({
    //         email
    //     }).
    //         res.json(newEmail);

    // })

})

module.exports = router;