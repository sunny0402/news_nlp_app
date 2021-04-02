async function serverDataRequest(url) {
  try {
    console.log("serverDataRequest start");
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    const serverDataResponse = await response.json();
    console.log(" serverDataRequest: response is... \n", serverDataResponse);

    // Not using response, making a seperate get request to get server data
    return serverDataResponse;
  } catch (error) {
    console.log("error", error);
  }
}

export { serverDataRequest };
