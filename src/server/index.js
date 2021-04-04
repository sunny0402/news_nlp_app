const dotenv = require("dotenv").config();
const my_key = process.env.API_KEY;
//dotenv.config({ path: "../../.env" });

const path = require("path");
const axios = require("axios").default;

// Setup empty JS object to act as endpoint for all routes
serverData = {};

// Require Express to run server and routes
const express = require("express");
const app = express();

/* Middleware*/

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

// POST ROUTE: make API call, save data to server, send back to client success message
app.post("/makeApiReq", myActions);

async function myActions(req, resp) {
  //options: res.send(), res.json(), res.end()
  console.log("myActions: incoming get request is", req.body);

  var summary_req = {
    method: "GET",
    url: "http://api.meaningcloud.com/summarization-1.0",
    params: {
      key: "d89f41c997ae41c64b51d807a5ecdd60",
      sentences: `${req.body.sentences}`,
      url: `${req.body.summary_url}`,
    },
    headers: {},
  };
  //make meaningCloud summarization API call
  try {
    axios
      .request(summary_req)
      .then(function (response) {
        console.log("response.data ... \n", response.data);
        const summary = response.data.summary;
        return summary;
      })
      //save data to server
      .then(function (summary) {
        console.log("summary being saved to server ...\n", summary);
        //save data to server, append new_data
        let idx_serverData = Object.keys(serverData).length;
        serverData[idx_serverData] = summary;
        console.log("serverData now is ...\n", serverData);
      })
      //Not sending data back, client will make another request to get saved server data
      .then(resp.send("API request succesful and data saved to server."));
  } catch (error) {
    console.log("serve/index.js/myActions error ...\n", error);
  }
}

//GET ROUTE: send server data to client so that it will be displayed
app.get("/dataReq", sendServerData);

async function sendServerData(req, resp) {
  try {
    console.log("sendServerData: incoming get request is", req.body);

    const lastEntry = serverData[Object.keys(serverData).length - 1];
    console.log("lastEntry", lastEntry);

    console.log("sendServerData: response is", serverData[lastEntry]);
    //.json() .send()
    // resp.send(serverData[lastEntry]);
    resp.send(serverData);
  } catch (error) {
    console.log(error);
  }
}
