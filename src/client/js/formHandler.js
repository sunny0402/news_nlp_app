//import { summaryRequest } from "./summaryRequest";
//const my_key = "d89f41c997ae41c64b51d807a5ecdd60";

const my_key = process.env.API_KEY;

function handleSubmit(event) {
  event.preventDefault();
  let summary_url = document.getElementById("summary-input-url").value;
  let summary_sentences = document.getElementById("summary-sentence-count")
    .value;
  //Summary Request Options
  //https://www.meaningcloud.com/developer/summarization/doc/1.0
  var summary_req = {
    method: "POST",
    baseURL: "https://api.meaningcloud.com",
    url: `/summarization-1.0?key=${my_key}&sentences=${summary_sentences}&url=${summary_url}`,
    headers: {},
    maxRedirects: 20,
  };

  //TODO: validate user input
  // Client.checkForName(my_text);

  console.log("::: Form Submitted :::");

  Client.summaryRequest(summary_req).then(function (summary_object) {
    console.log("::: summaryRequest complete :::");
    Client.displayResult(summary_object);
  });
}

export { handleSubmit };
