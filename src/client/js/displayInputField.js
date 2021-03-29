function displayInputField(event) {
  event.preventDefault();
  var result = document.getElementById("result");
  result.innerHTML = "";
  var ele = document.getElementsByTagName("input");
  console.dir(ele);

  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      if (ele[i].checked) {
        console.log("check radio box found");
        var input_field = document.createElement("input");
        input_field.type = ele[i].value;
        input_field.placeholder = `please input ${ele[i].value}`;
        result.appendChild(input_field);
      }
    }
  }
}

export { displayInputField };
