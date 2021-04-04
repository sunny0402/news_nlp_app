const dotenv = require("dotenv").config();
const my_key = process.env.API_KEY;

var https = require("follow-redirects").https;
var fs = require("fs");
//let axios = require("axios").default;
//const http = require("https");

async function myApiRequest(client_input) {
  var summary_req = {
    method: "POST",
    hostname: "api.meaningcloud.com",
    // 'path': '/summarization-1.0?key=<your_key>&txt=<text>&sentences=<number_sentences>',
    path: `/summarization-1.0?key=${my_key}&sentences=${client_input.sentences}&url=${client_input.summary_url}`,
    headers: {},
    maxRedirects: 20,
  };

  var req = https.request(summary_req, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      return body.toString();
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
  // try {
  //   const response = await axios.request(summary_req);
  //   console.log("response from axios request", response.data);
  //   const summary_object = {
  //     summary: response.data.summary,
  //   };
  //   console.log("summaryRequest: summary_object \n", summary_object);
  //   return summary_object;
  // } catch (error) {
  //   console.log("error", error);
  //   alert(error);
  // }
}

module.exports = myApiRequest;
