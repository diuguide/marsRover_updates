//bring in mongoose requirements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailList = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: "Please provide an email if you would like to join our email list."
    }
})
const Email = mongoose.model('email', EmailList);

module.exports = Email;