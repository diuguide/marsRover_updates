//bring in mongoose requirements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
  },
  text: {
    type: String,
    trim: true,
  },
  source: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  alt: {
    type: String,
    trim: true,
  },
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;