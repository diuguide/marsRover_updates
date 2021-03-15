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
  if (!email) return res.json({ msg: "Please enter an email" });
  if (email) {
    Email.findOne({ email }).then((emailQuery) => {
      if (emailQuery) return res.json({ msg: "Email already added to list!" });
      const newEmail = new Email({ email });
      newEmail.save();
      res.json({ msg: "Email added to list!", newEmail });
    });
  }
});

// Delete User By ID
router.delete("/email/:id", (req, res) => {
  Email.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => console.log("Error DELETE: ", err));
});

module.exports = router;
