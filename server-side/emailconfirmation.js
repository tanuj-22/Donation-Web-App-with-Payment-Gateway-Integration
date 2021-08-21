const nodemailer = require("nodemailer");
const emailTemplate = require("./config/emailTemplate")
const config = require("./config/auth.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

module.exports.sendConfirmationEmail = (orderObject,date) => {
    console.log(orderObject,date);
    console.log("Email sent");
    transport.sendMail({
      from: user,
      to: orderObject.email,
      subject: "Payment confirmation",
      html: emailTemplate.emailHtml(orderObject,date),
    }).catch(err => console.log(err));
  };