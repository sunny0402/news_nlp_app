//import { summaryRequest } from "./summaryRequest";
//const my_key = "d89f41c997ae41c64b51d807a5ecdd60";

const my_key = process.env.API_KEY;

async function handleSubmit(event) {
  event.preventDefault();
  let client_url = document.getElementById("summary-input-url").value;
  let summary_sentences = document.getElementById("summary-sentence-count")
    .value;
  let client_data = {
    sentences: summary_sentences,
    summary_url: client_url,
  };
  console.log("::: Form Submitted :::");

  Client.summaryRequest("/makeApiReq", client_data).then(function (
    summary_object
  ) {
    console.log("::: summaryRequest complete :::");
    Client.displayResult(summary_object);
  });
}

//Summary Request Options
//https://www.meaningcloud.com/developer/summarization/doc/1.0
// var summary_req = {
//   method: "POST",
//   baseURL: "https://api.meaningcloud.com",
//   url: `/summarization-1.0?key=${my_key}&sentences=${summary_sentences}&url=${summary_url}`,
//   headers: {},
//   maxRedirects: 20,
// };

//TODO: validate user input
// Client.checkForName(my_text);

//TODO: send info to server
//GET async function to send data to server

export { handleSubmit };
