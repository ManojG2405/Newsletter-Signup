//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const emailID = req.body.email;
  console.log(firstName, lastName, emailID);

})

app.listen(3003, function () {
  console.log("Server is running on port 3003");
});



// API Key
// 0ca9d3fc952b9527f6a7294689f778c9 - us13


/* Audience ID 03c9a671a9 */