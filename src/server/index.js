const dotenv = require("dotenv").config();
//dotenv.config({ path: "../../.env" });
const my_key = process.env.API_KEY;

const path = require("path");
const meaningCloud = require("./myApiRequest.js");
//import { myApiRequest } from "./myApiRequest.js";

// Setup empty JS object to act as endpoint for all routes
serverData = {};

// Require Express to run server and routes
const express = require("express");
const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
//deprecated: https://expressjs.com/en/changelog/4x.html#4.16.0
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
//?????
// app.use(express.static('dist'))
// app.get('/', function (req, res) {
//     res.sendFile('dist/index.html')
// })

app.use(express.static("dist"));

// Setup Server
const port = 3000;
//for deploying app: process.env.PORT
const server = app.listen(process.env.PORT || port, listening);
function listening() {
  console.log(`my server running on localhost: ${port}`);
}

// POST route: make API call, save data to server, send back to client success message
app.post("/makeApiReq", myActions);

async function myActions(req, resp) {
  //options: res.send(), res.json(), res.end()
  console.log("myActions: incoming get request is", req.body);

  //make meaningCloud API call
  try {
    // let new_data = await meaningCloud(req.body);
    let new_data = await meaningCloud(req.body);

    console.log("server myActions new_data", new_data);
  } catch (error) {
    console.log(error);
  }

  //save data to server, append new_data
  let idx_serverData = Object.keys(serverData).length;
  serverData[idx_serverData] = new_data;

  //resp.end();
  //Not sending data back, client will make another request to get saved server data
  resp.send("API request succesful and data saved to server.");
}

//GET route: send server data to client so that it will be displayed
app.get("/dataReq", sendServerData);

async function sendServerData(req, resp) {
  try {
    console.log("sendServerData: incoming get request is", req.body);

    const lastEntry = serverData[Object.keys(serverData).length - 1];

    console.log("sendServerData: response is", serverData[lastEntry]);

    resp.json(serverData[lastEntry]);
  } catch (error) {
    console.log(error);
  }
}
