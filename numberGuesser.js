//PART1-Code for section#defineRange form#rangeForm
//This part of code executes when the user enters values in the number input Lower Range and Upper Range and clicks the Submit Range button
//the range values get passed to the getGuess function described in PART2-Code


//PART2-Code for section#mainGame & section#gameResults button#guessButton
  //This part of the code executes when the user clicks the guess button (#guessButton)
  //When the guess button is clicked, this code reads the users guess from the input
  //text field and returns an appropriate response with regards to the relation of the guess to the target value

function getGuess() {
  //Getting user input for the valid range in which to guess
  var minRangeString = document.getElementById("minRange").value;
  var maxRangeString = document.getElementById("maxRange").value;
  var minRange = parseInt(minRangeString);
  var maxRange = parseInt(maxRangeString);
  alert(typeof minRange + minRange +  " " + typeof maxRange + maxRange);

  //Generate random number within minRange < n < maxRange.  Get user guess and parse into integer.
  var targetValue = 25; //Math.floor(Math.random()*100) +1;
  var userGuess = document.getElementById("userGuess").value;
  var userGuessNum = parseInt(userGuess);
  //alert(typeof userGuessNum + " " + userGuessNum);

  //var minRange = 0;
  //var maxRange = 100;

  //Display gameResults upon click of guess button
  var lastGuessMessage = document.getElementById("lastGuessMessage");
  lastGuessMessage.textContent = "Your last guess was";
  var userGuessValue = document.getElementById("userGuessValue");
  userGuessValue.textContent = userGuess;

  //Determine what gameResponse displays with gameResults
  //!!!! Still need to fix for case that starts with a number (25day) for example

  if (userGuessNum < minRange || userGuessNum > maxRange) {
    var gameResponse = document.getElementById("gameResponse");
    gameResponse.textContent = "Your number is out of range"
  }

  else if (userGuessNum == targetValue){
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

//PART3-Code for (#section#mainGame & section#gameResults) button#clearButton
//This part of the code executes when user clicks the clear button (#clearButton)
//When clear button is clicked, any text that the user has typed in the text input #userGuess disappears and
//returns to the placeholder value

function clearText() {
  document.getElementById("userGuess").value = '';
}

var clearButton = document.getElementById("clearButton");
clearButton.onclick = clearText;

//PART4-Code for footer button#resetButton
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
