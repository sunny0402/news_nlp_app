function displayResult(data_obj_from_server) {
  // event.preventDefault();
  let result = document.getElementById("results");
  result.innerHTML = "";

  console.log("displayResult: data_obj_from_server", data_obj_from_server);

  let summary_text = document.createElement("p");

  summary_text.id = "theResultsParagraph";
  summary_text.innerHTML = data_obj_from_server.summary;
  // summary_text.style.width = "80%";
  // summary_text.style.margin = "0 auto";
  result.appendChild(summary_text);
  // result.scrollIntoView();
}

export { displayResult };
