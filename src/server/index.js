// Configure the environment variables
//const dotenv = require("dotenv");
//  add Configuration to be able to use env variables
//dotenv.config();

const my_key = process.env.API_KEY;

const path = require("path");
const axios = require("axios").default;

// Setup empty JS object to act as endpoint for SUMMARY route
serverData = {};

// Setup empty JS object to act as endpoint for SENTIMENT route
sentimentDataObject = {};

// Require Express to run server and routes
const express = require("express");
const app = express();

/* Middleware*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "2mb" }));
const cors = require("cors");
app.use(cors());

// rate limit: https://blog.logrocket.com/rate-limiting-node-js/
const myrateLimit = require("express-rate-limit");
const thelimit = myrateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 10,
  message: "You have exceeded the 10 requests in 24 hrs limit!",
  headers: true,
});
app.use(thelimit);

app.use(express.static("dist"));
//app.use(express.static(__dirname + "/dist"));

// Setup Server
const port = 3000;
//for deploying app: process.env.PORT
const server = app.listen(process.env.PORT || port, listening);
function listening() {
  console.log(`my server running on ${port}`);
  //console.log("my_key", my_key);
}

// send the user to index html page inspite of the url
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "dist/index.html"));
// });

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// SUMMARY ENDPOINT: make Meaning Cloud SUMMARY API call, save data to server, send back to client success message
app.post("/makeSummaryApiReq", getSummary);

async function getSummary(req, resp) {
  //options: res.send(), res.json(), res.end()
  console.log("getSummary: incoming request is ..", req.body);

  var summary_req = {
    method: "GET",
    url: "http://api.meaningcloud.com/summarization-1.0",
    params: {
      key: `${my_key}`,
      sentences: `${req.body.sentences}`,
      url: `${req.body.summary_url}`,
    },
    headers: {},
  };
  //make meaningCloud summarization API call with axios
  try {
    const axios_response = await axios.request(summary_req);
    const summary = await axios_response.data.summary;

    console.log("summary ... \n", summary);

    //save data to server

    let idx_serverData = Object.keys(serverData).length;
    console.log("idx_serverData ...", idx_serverData);

    serverData[idx_serverData] = summary;
    console.log("serverData now is ...\n", serverData);

    //Not sending data back, client will make another request to get saved server data
    resp.json("API request succesful and SUMMARY data saved to server.");
  } catch (error) {
    console.log("serve/index.js/myActions error ...\n", error);
  }
}

// SENTIMENT ROUTE: make Meaning Cloud SENTIMENT API call, save data to server, send back to client success message
app.post("/makeSentimentApiReq", getSentiment);

async function getSentiment(req, resp) {
  //options: res.send(), res.json(), res.end()
  console.log("getSentiment: incoming request is ..", req.body);
  var sentiment_req = {
    method: "GET",
    url: "https://api.meaningcloud.com/sentiment-2.1",
    params: {
      key: `${my_key}`,
      model: "general",
      txt: `${req.body.the_text}`,
      lang: "en",
      egp: "n",
      rt: "n",
      uw: "n",
      of: "json",
      txtf: "plain",
      sdg: "l",
      dm: "s",
    },
    headers: {},
  };
  // url: `${req.body.summary_url}`,

  //make meaningCloud SENTIMENT API call with axios
  try {
    const axios_response = await axios.request(sentiment_req);

    const sentiment = await axios_response.data;

    console.log("sentiment", sentiment);

    let idx_sentimentDataObject = Object.keys(sentimentDataObject).length;
    console.log("idx_sentimentDataObject  ...", idx_sentimentDataObject);

    let sentences = [];
    sentiment.sentence_list.forEach((a_sentence) => {
      sentences.push({
        text: a_sentence.text,
        score_tag: a_sentence.score_tag,
        confidence: a_sentence.confidence,
      });
    });

    sentimentDataObject[idx_sentimentDataObject] = {
      my_score_tag: sentiment.score_tag,
      my_confidence: sentiment.confidence,
      my_irony: sentiment.irony,
      my_sentence_list: sentences,
    };
    console.log(
      " This is what I plan to display... \n sentimentDataObject[idx_sentimentDataObject] ...\n",
      sentimentDataObject[idx_sentimentDataObject]
    );

    //Not sending data back, client will make another request to get saved server data
    resp.json("API request succesful and SENTIMENT data saved to server.");
  } catch (error) {
    console.log("serve/index.js/myActions error ...\n", error);
  }
}

//GET ROUTE: send server SUMMARY data to client so that it will be displayed
app.get("/dataReq", sendServerData);

async function sendServerData(req, resp) {
  try {
    console.log("sendServerData: incoming get request received");

    const lastEntry = {
      summary: serverData[Object.keys(serverData).length - 1],
    };

    console.log("sendServerData:  ... \n", lastEntry);

    resp.json(lastEntry);
    //clear data
    while (serverData.length) {
      delete serverData.summary;
    }
  } catch (error) {
    console.log(error);
  }
}

//GET ROUTE: send server SENTIMENT data to client so that it will be displayed
app.get("/dataReqSentiment", sendSentimentData);

async function sendSentimentData(req, resp) {
  try {
    console.log("sendSentimentData: incoming get request received");

    const lastEntrySentiment = {
      sentiment_stats:
        sentimentDataObject[Object.keys(sentimentDataObject).length - 1],
    };

    console.log("sendServerData:  ... \n", lastEntrySentiment);

    resp.json(lastEntrySentiment);
    //clear data
    while (sentimentDataObject.length) {
      delete sentimentDataObject.sentiment;
    }
  } catch (error) {
    console.log(error);
  }
}
