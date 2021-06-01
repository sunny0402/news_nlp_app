async function handleSubmit(event) {
  event.preventDefault();

  //validate user input after they hit submit ...
  let pass_valid = true;

  let client_url = document.getElementById("summary-input-url").value;
  let summary_sentences = document.getElementById(
    "summary-sentence-count"
  ).value;

  if (client_url.trim() === "") {
    pass_valid = false;
    alert("Please enter a url.");
    return;
  }
  if (summary_sentences.trim() === "") {
    pass_valid = false;
    alert("Please enter number of sentences.");
    return;
  }
  const regex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  console.log("regex", regex);
  let result = regex.test(client_url);
  if (!result) {
    pass_valid = false;
    alert("Please enter a valid url.");
    return;
  } else if (pass_valid) {
    //collect summary request data
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

    const data_2_display = await Client.serverDataRequest("/dataReq");

    console.log(
      "formHandler: Client.serverDataRequest: data_2_display",
      data_2_display
    );

    Client.displayResult(data_2_display);
  }
}

export { handleSubmit };
