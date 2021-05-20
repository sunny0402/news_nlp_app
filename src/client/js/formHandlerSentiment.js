async function handleSubmitSentiment(event) {
  event.preventDefault();

  //collect sentiment request data
  //TODO: add option of sentiment analysis for document or url
  //TODO: if pass validation
  if (document.getElementById("sentiment-input-txt").value) {
    let sentiment_txt = await document.getElementById("sentiment-input-txt")
      .value;
    let sentiment_data = {
      the_text: sentiment_txt,
    };
    console.log("sentiment_data ...\n", sentiment_data);
    // NLP SENTIMENT REQUEST
    const server_msg_sentiment = await Client.sentimentRequest(
      "http://localhost:3000/makeSentimentApiReq",
      sentiment_data
    );
    console.log(
      "formHandler: sentimentRequest: server_msg_sentiment",
      server_msg_sentiment
    );
  }

  const data_2_display = await Client.serverDataRequestSentiment(
    "http://localhost:3000/dataReqSentiment"
  );

  console.log(
    "formHandler: Client.serverDataRequestSentiment: data_2_display",
    data_2_display
  );

  Client.displayResultSentiment(data_2_display);
}

export { handleSubmitSentiment };
