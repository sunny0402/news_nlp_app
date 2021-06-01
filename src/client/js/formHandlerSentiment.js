async function handleSubmitSentiment(event) {
  event.preventDefault();
  //collect sentiment request data from DOM
  if (document.getElementById("sentiment-input-txt").value) {
    let sentiment_txt = await document.getElementById("sentiment-input-txt")
      .value;
    let sentiment_data = {
      the_text: sentiment_txt,
    };
    console.log("sentiment_data ...\n", sentiment_data);

    //TODO: if pass validation
    let pass_valid = true;
    //empty
    if (sentiment_txt.trim() === "") {
      pass_valid = false;
      alert("Please enter text.");
      return;
    }
    //longer than 2100 characters ~ 300 words
    if (sentiment_txt.length > 2100) {
      pass_valid = false;
      alert("Please enter less text.");
      return;
    } else if (pass_valid) {
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

    const data_2_display = await Client.serverDataRequestSentiment(
      "/dataReqSentiment"
    );

    console.log(
      "formHandler: Client.serverDataRequestSentiment: data_2_display",
      data_2_display
    );

    Client.displayResultSentiment(data_2_display);
  }
}

export { handleSubmitSentiment };
