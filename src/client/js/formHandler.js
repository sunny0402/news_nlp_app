async function handleSubmit(event) {
  event.preventDefault();
  //collect summary request data
  let client_url = await document.getElementById("summary-input-url").value;
  let summary_sentences = await document.getElementById(
    "summary-sentence-count"
  ).value;
  let client_data = {
    sentences: summary_sentences,
    summary_url: client_url,
  };

  //collect sentiment request data

  //can be text, doc, or url
  let sentiment_txt = await document.getElementById("sentiment-input-txt")
    .value;
  // let sentiment_doc = await document.getElementById("sentiment-input-doc")
  //   .value;
  // let sentiment_url = await document.getElementById("sentiment-input-url")
  //   .value;

  let sentiment_data = {
    text: sentiment_txt,
  };

  console.log("client_data ...\n", client_data);
  console.log("sentiment_data ...\n", sentiment_data);

  //SUMMARY REQUEST
  const server_msg = await Client.summaryRequest(
    "http://localhost:3000/makeSummaryApiReq",
    client_data
  );

  // NLP SENTIMENT REQUEST
  const server_msg_sentiment = await Client.sentimentRequest(
    "http://localhost:3000/makeSentimentApiReq",
    sentiment_data
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
