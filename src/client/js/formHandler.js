//import { summaryRequest } from "./summaryRequest";
//const my_key = "d89f41c997ae41c64b51d807a5ecdd60";

//const my_key = process.env.API_KEY;

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

  let step1 = await Client.summaryRequest(
    "http://localhost:3000/makeApiReq",
    client_data
  );

  console.log("::: summaryRequest complete :::");

  let step2 = await Client.serverDataRequest("http://localhost:3000/dataReq");

  console.log("::: serverDataRequest complete :::");

  let step3 = await Client.displayResult(serverDataResponse);
}

export { handleSubmit };
