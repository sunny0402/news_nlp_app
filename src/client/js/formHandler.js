async function handleSubmit(event) {
  event.preventDefault();
  let client_url = await document.getElementById("summary-input-url").value;
  let summary_sentences = await document.getElementById(
    "summary-sentence-count"
  ).value;
  let client_data = {
    sentences: summary_sentences,
    summary_url: client_url,
  };

  console.log("::: Form Submitted :::");

  const server_msg = await Client.summaryRequest(
    "http://localhost:3000/makeApiReq",
    client_data
  );

  console.log("formHandler: Client.summaryRequest: server_msg", server_msg);

  const data_2_display = await Client.serverDataRequest(
    "http://localhost:3000/dataReq"
  );

  console.log(
    "formHandler: Client.serverDataRequest: data_2_display",
    data_2_display
  );

  Client.displayResult(data_2_display);
}

export { handleSubmit };
