async function summaryRequest(url, data = {}) {
  try {
    // data = {
    //   temperature: data.temperature,
    //   date: newDate,
    //   user_response: document.getElementById("feelings").value,
    // };
    console.log("summaryRequest: data \n", data);
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    const serverResponse = await response.json();
    console.log(
      "summaryRequest : data posted to server and response received ..."
    );
    console.log("response is... \n", serverResponse);

    // Not using response, making a seperate get request in updateDOM() to get server data
    return serverResponse;
  } catch (error) {
    console.log("error", error);
  }
}

export { summaryRequest };
