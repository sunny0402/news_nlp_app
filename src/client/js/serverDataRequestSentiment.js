const fetch = require("node-fetch");

async function serverDataRequestSentiment(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const serverResponse = await response.json();

    console.log("serverDataRequestSentiment: serverResponse", serverResponse);

    return serverResponse;
  } catch (error) {
    console.log("error", error);
  }
}

export { serverDataRequestSentiment };
