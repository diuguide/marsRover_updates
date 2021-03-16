const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

//nodemailer

//Receive email from frontend, create email.
router.post("/send", (req, res, next) => {
    const { email } = req.body;
  //Create Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  //Establish mail options - sender, receiver
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thanks for joining the Mars Rover Updates Email List!",
    text: `Thank you ${email} for joining the mailing list.  You will receive periodic emails about the Mars Rover Perserverance and its progress 140 Million miles from home!`,
  };

  //Transport email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = router;
