const dotenv = require("dotenv").config();
//dotenv.config({ path: "../../.env" });
const my_key = process.env.API_KEY;

var path = require("path");
const mockAPIResponse = require("./myApiRequest.js");

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const app = express();
/* Middleware*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
//deprecated: https://expressjs.com/en/changelog/4x.html#4.16.0
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8080;
//for deploying app: process.env.PORT
const server = app.listen(process.env.PORT || port, listening);
function listening() {
  console.log(`my server running on localhost: ${port}`);
}

// GET route: make API call, save data to server, send back to client
app.get("/getData", myActions);

function myActions(req, resp) {
  //options: res.send(), res.json(), res.end()
  console.log("myActions: incoming get request is", req.body);

  //TODO: make API call
  Client.myApiRequest(req.body).then(function (summary_object) {
    console.log("::: summaryRequest complete :::");

    //TODO: save summary_object to server

    //TODO: send server_data back to client

    //Client.displayResult(summary_object);
  });
}

  console.log("myActions response is \n", projectData);

  //When the parameter is an Array or Object, Express responds with the JSON representation
  resp.send(projectData);
}
//app.use(express.static("dist"));
//console.log(__dirname);

// app.get("/", function (req, res) {
//   // res.sendFile('dist/index.html')
//   res.sendFile(path.resolve("src/client/views/index.html"));
// });

// // designates what port the app will listen to for incoming requests
// app.listen(8080, function () {
//   console.log("Example app listening on port 8080!");
//   console.log(`Your API key is ${process.env.API_KEY}`);
// });

// app.get("/getSummary", function (req, res) {
//   res.send(mockAPIResponse);
// });
