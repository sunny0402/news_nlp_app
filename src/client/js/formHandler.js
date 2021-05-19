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

  //collect sentiment request data
  //TODO: add option of sentiment analysis for document or url
  if (document.getElementById("sentiment-input-txt").value) {
    let sentiment_txt = await document.getElementById("sentiment-input-txt")
      .value;
    let sentiment_data = {
      the_text: sentiment_txt,
    };
    console.log("sentiment_data ...\n", sentiment_data);
    // NLP SENTIMENT REQUEST
    const server_msg_sentiment = await Client.sentimentRequest(
      "/makeSentimentApiReq",
      sentiment_data
    );
    console.log(
      "formHandler: sentimentRequest: server_msg_sentiment",
      server_msg_sentiment
    );
  }

  const data_2_display = await Client.serverDataRequest("/dataReq");

  console.log(
    "formHandler: Client.serverDataRequest: data_2_display",
    data_2_display
  );

  Client.displayResult(data_2_display);
}

export { handleSubmit };
