const fetch = require("node-fetch");

async function summaryRequest(url, data = {}) {
  try {
    console.log("summaryRequest: data being sent to server \n", data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const server_message = await response.text();

    console.log("summaryRequest: response is... \n", server_message);

    // Not using response, making a seperate get request to get server data
    return server_message;
  } catch (error) {
    console.log("error", error);
  }
}

export { summaryRequest };
