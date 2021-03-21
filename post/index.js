const express = require("express");
const router = express.Router();

const Post = require("../models/Posts");

router.get("/", (req, res) => {
  Post.find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.post("/addPost", (req, res) => {
  const { title, text1, source, img, alt } = req.body;
  const newPost = new Post({ title, text1, source, img, alt });
  newPost
    .save()
    .catch((err) => console.log(err));
  res.json(newPost);
});

// Delete Post By ID
router.delete("/post/:id", (req, res) => {
  Post.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => console.log("Error DELETE: ", err));
});

module.exports = router;
