async function handleSubmit(event) {
  event.preventDefault();

  //collect summary request data
  if (
    document.getElementById("summary-input-url").value &&
    document.getElementById("summary-sentence-count").value
  ) {
    let client_url = await document.getElementById("summary-input-url").value;
    let summary_sentences = await document.getElementById(
      "summary-sentence-count"
    ).value;
    let client_data = {
      sentences: summary_sentences,
      summary_url: client_url,
    };
    console.log("client_data ...\n", client_data);
    //SUMMARY REQUEST
    const server_msg = await Client.summaryRequest(
      "/makeSummaryApiReq",
      client_data
    );
    console.log("formHandler: summaryRequest: server_msg", server_msg);
  }

  const data_2_display = await Client.serverDataRequest(
    "/dataReq"
  );

  console.log(
    "formHandler: Client.serverDataRequest: data_2_display",
    data_2_display
  );

  Client.displayResult(data_2_display);
}

export { handleSubmit };
