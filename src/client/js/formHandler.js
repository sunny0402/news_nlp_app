function handleSubmit(event) {
  event.preventDefault();

  const my_key = "d89f41c997ae41c64b51d807a5ecdd60";
  let my_text = document.getElementById("name").value;

  //Sentiment Analysis Request Options
  //https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/request#sentiment-models-language
  var sentiment_req = {
    method: "POST",
    baseURL: "https://api.meaningcloud.com",
    url: `/sentiment-2.1?key=${my_key}&lang=en&txt=${my_text}&model=general&egp=n&uw=n&dm=s`,
    headers: {},
    maxRedirects: 20,
  };

  //Summary Request Options
  //https://www.meaningcloud.com/developer/summarization/doc/1.0
  var summary_req = {
    method: "POST",
    baseURL: "https://api.meaningcloud.com",
    url: `/summarization-1.0?key=${my_key}&lang=en&txt=${my_text}&&sentences=5`,
    headers: {},
    maxRedirects: 20,
  };

  //validate user input
  Client.checkForName(my_text);

  console.log("::: Form Submitted :::");

  Client.sentimentAnalysisRequest(sentiment_req);

  console.log("::: sentimentAnalysisRequest complete :::");

  Client.summaryRequest(summary_req);

  console.log("::: summaryRequest complete :::");
}

export { handleSubmit };
