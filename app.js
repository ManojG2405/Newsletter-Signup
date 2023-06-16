const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")


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
  // console.log(firstName, lastName, emailID);
  const data = {
    mambers: [
      {
        email_address: emailID,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName

        }
      }
    ]
  }
  const jsonData = JSON.stringify(data)

  const url = "https://us13.apmailchimp.com/3.0/lists/03c9a671a9"

  const options = {
    method: "POST",
    auth: "Manoj1:0ca9d3fc952b9527f6a7294689f778c9 - us13"
  }


  const request = https.request(url, options, function (response) {

    response.on("data", function (data) {
      console.log(JSON.parse(data));

    })

  });
  request.write(jsonData);
  request.end();


});
app.listen(3001, function () {
  console.log("Server is running on port 3001");
});



// API Key
// 0ca9d3fc952b9527f6a7294689f778c9 - us13


/* Audience ID 03c9a671a9 */