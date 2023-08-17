// import express from "express";
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
router.get("/", async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "verda73@ethereal.email",
      pass: "zAFR3vhx8ausnf17fy",
    },
  });
  let info = await transporter.sendMail({
    from: '"Ashish Sharma" <ashish@singsys.com>', // sender address
    to: "loveuxharma00@gmail.com", // list of receivers
    subject: "Testing Mail", // Subject line
    text: "Hello dear! <br> this is Ashish from development team and this mail is regarding to inform you that you have successfully registered as a testing user.", // plain text body
    html: "<h1>Good Morning</h1>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info);
});
module.exports = router;
