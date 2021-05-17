function displayResult(data_obj_from_server) {
  // event.preventDefault();
  let result = document.getElementById("summary-results-div");
  result.innerHTML = "";

  console.log("displayResult: data_obj_from_server ...", data_obj_from_server);

  let summary_text = document.createElement("p");

  summary_text.id = "theResultsParagraph";
  summary_text.innerHTML = data_obj_from_server.summary;

  result.appendChild(summary_text);
}

export { displayResult };
