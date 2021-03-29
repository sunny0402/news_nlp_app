function displayResult(an_obj) {
  // event.preventDefault();
  let result = document.getElementById("results");
  result.innerHTML = "";

  console.log("displayResult: summary_obj", an_obj);

  let summary = document.createElement("p");
  summary.innerHTML = an_obj.summary;
  result.appendChild(summary);
}

export { displayResult };
