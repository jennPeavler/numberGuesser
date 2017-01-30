//PART1-Code for section#mainGame & section#gameResults button#guessButton
  //This part of the code executes when the user clicks the guess button (#guessButton)
  //When the guess button is clicked, this code reads the users guess from the input
  //text field and returns an appropriate response with regards to the relation of the guess to the target value

function getGuess() {

  var targetValue = 25; //Math.floor(Math.random()*100) +1;  Generate random value between 1-100
  var userGuess = document.getElementById("userGuess").value;
  var userGuessNum = parseInt(userGuess);
  alert(typeof userGuessNum + " " + userGuessNum);

  var lastGuessMessage = document.getElementById("lastGuessMessage"); //Display gameResults upon click of guess button
  lastGuessMessage.textContent = "Your last guess was";
  var userGuessValue = document.getElementById("userGuessValue");
  userGuessValue.textContent = userGuess;

  //Determine what gameResponse displays with gameResults
  if (userGuessNum == targetValue){
    var gameResponse = document.getElementById("gameResponse");
    gameResponse.textContent = "BOOM!";
  }
  else if (userGuessNum < targetValue) {
    var gameResponse = document.getElementById("gameResponse");
    gameResponse.textContent = "That is too low";
  }

  else if (userGuessNum > targetValue) {
    var gameResponse = document.getElementById("gameResponse");
    gameResponse.textContent = "That is too high";
  }

  else {
    var gameResponse = document.getElementById("gameResponse");
    gameResponse.textContent = "Please enter a valid number";
  }
}


var guessButton = document.getElementById("guessButton");
guessButton.onclick = getGuess;

//PART2-Code for (#section#mainGame & section#gameResults) button#clearButton
//This part of the code executes when user clicks the clear button (#clearButton)
//When clear button is clicked, any text that the user has typed in the text input #userGuess disappears and
//returns to the placeholder value

function clearText() {
  document.getElementById("userGuess").value = '';
}

var clearButton = document.getElementById("clearButton");
clearButton.onclick = clearText;

//PART3-Code for footer button#resetButton
//This part of the code executes when user clicks the reset button (#resetButton)
//When reset button is clicked, game resets to default layout (beginning layout)

function resetGame() {
  document.getElementById("userGuess").value = '';
  document.getElementById("lastGuessMessage").textContent = '';
  document.getElementById("userGuessValue").textContent = '';
  document.getElementById("gameResponse").textContent = '';
}

var resetButton = document.getElementById("resetButton");
resetButton.onclick = resetGame;
