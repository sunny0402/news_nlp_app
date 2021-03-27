function handleSubmit(event) {
  event.preventDefault();

  const my_key = "d89f41c997ae41c64b51d807a5ecdd60";
  let my_text = document.getElementById("name").value;

  //Sentiment Analysis Request Options
  //https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/request#sentiment-models-language
  var axios_req_options = {
    method: "POST",
    baseURL: "https://api.meaningcloud.com",
    url: `/sentiment-2.1?key=${my_key}&lang=en&txt=${my_text}&model=general&egp=n&uw=n&dm=s`,
    headers: {},
    maxRedirects: 20,
  };

  // check what text was put into the form field
  //   let formText = document.getElementById("name").value;

  //validate here
  Client.checkForName(my_text);

  console.log("::: Form Submitted :::");

  Client.sentimentAnalysisRequest(axios_req_options);

  console.log("::: sentimentAnalysisRequest complete :::");
}

export { handleSubmit };
