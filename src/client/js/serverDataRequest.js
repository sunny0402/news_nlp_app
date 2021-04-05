async function serverDataRequest(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    // .json();
    const serverResponse = await response.json();

    const data_to_display = serverResponse.data;

    console.log(
      " serverDataRequest: response from server is... \n",
      data_to_display
    );

    return data_to_display;
  } catch (error) {
    console.log("error", error);
  }
}

export { serverDataRequest };
