const fetch = require("node-fetch");
// example request: https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools
// example axios request: https://rapidapi.com/MeaningCloud/api/sentiment-analysis

/*
    - sentimentRequest sends data collected from the DOM to my server endpoint
    - server endpoint makes the sentiment request to the third party API (MeaningCloud)
    - sentimentRequest waits for a success message
    - seperate function will make request to my server to get data to display
*/
async function sentimentRequest(url, data = {}) {
  try {
    console.log("sentimentRequest: data being sent to server \n", data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const server_message = await response.text();

    console.log("sentimentRequest: response is... \n", server_message);

    // Not using response, making a seperate get request to get server data
    return server_message;
  } catch (error) {
    console.log("error", error);
  }
}

export { sentimentRequest };
