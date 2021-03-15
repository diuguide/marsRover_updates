//bring in mongoose requirements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    unique: true,
    trim: true,
  },
});
const Email = mongoose.model('email', EmailSchema);

module.exports = Email;