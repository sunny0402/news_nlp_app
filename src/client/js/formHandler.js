//import { summaryRequest } from "./summaryRequest";
//const my_key = "d89f41c997ae41c64b51d807a5ecdd60";

//const my_key = process.env.API_KEY;

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

  Client.summaryRequest("http://localhost:3000/makeApiReq", client_data)
    .then(await Client.serverDataRequest("http://localhost:3000/dataReq"))
    .then(function (serverDataResponse) {
      console.log("::: serverDataRequest complete :::");
      console.log("serverDataResponse ...", serverDataResponse);
      Client.displayResult(serverDataResponse);
    });

  console.log("::: serverDataRequest complete :::");
}

export { handleSubmit };
