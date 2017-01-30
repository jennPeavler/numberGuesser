

function receiveValues() {
  var textValue = document.getElementById("textExample").value;
  alert(textValue);
}

var textButton = document.getElementById("textButton");
textButton.onclick = receiveValues;
