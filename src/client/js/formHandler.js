import { summaryRequest } from "./summaryRequest";
const my_key = "d89f41c997ae41c64b51d807a5ecdd60";

let summary_url = document.getElementById("summary-input-url").value;
let summary_file = document.getElementById("summary-input-file").value;
let summary_text = document.getElementById("summary-input-text").value;

function handleSubmit(event) {
  event.preventDefault();
  //Summary Request Options
  //https://www.meaningcloud.com/developer/summarization/doc/1.0
  var summary_req = {
    method: "POST",
    baseURL: "https://api.meaningcloud.com",
    url: `/summarization-1.0?key=${my_key}&sentences=5&txt=${summary_text}`,
    headers: {},
    maxRedirects: 20,
  };

  //TODO: validate user input
  // Client.checkForName(my_text);

  //TODO: allow user to input link, text or file
  //Client.displayInputField();

  console.log("::: Form Submitted :::");

  Client.summaryRequest(summary_req);

  console.log("::: summaryRequest complete :::");
}

export { handleSubmit };
