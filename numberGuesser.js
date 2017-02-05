var guessButton = document.getElementById("guess-button");
var clearButton = document.getElementById("clear-button");
var resetButton = document.getElementById("reset-button");
var instructionButton = document.getElementById("instruction-button");
var lastGuessMessage = document.getElementById("last-guess-message");
var userGuess = document.getElementById("user-guess");
var userGuessValue = document.getElementById("user-guess-value");
var minRangeString = document.getElementById("min-range");
var maxRangeString = document.getElementById("max-range");
var gameResponse = document.getElementById("game-response");
var instruction1 = document.getElementById("instruction-1");
var instruction2 = document.getElementById("instruction-2");
var instruction3 = document.getElementById("instruction-3");



guessButton.onclick = getGuess;
function getGuess() {
  var minRange = parseInt(minRangeString.value);
  var maxRange = parseInt(maxRangeString.value);
  var targetValue = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  var userGuessNum = parseInt(userGuess.value);
  lastGuessMessage.textContent = "Your last guess was";
  userGuessValue.textContent = userGuess.value;

  if (userGuessNum < minRange || userGuessNum > maxRange) {
    gameResponse.textContent = "Your number is out of range";
  }
  else if (userGuessNum == targetValue){
    gameResponse.textContent = "BOOM!";
    minRange -= 10;
    maxRange += 10;
    minRangeString = minRange;
    maxRangeString = maxRange;
  }
  else if (userGuessNum < targetValue) {
    gameResponse.textContent = "That is too low";
  }
  else if (userGuessNum > targetValue) {
    gameResponse.textContent = "That is too high";
  }
  else {
    gameResponse.textContent = "Not a valid number or you did not enter a guessing range";
  }
  guessButton.classList.remove('enableClass');
  clearButton.classList.remove('enableClass');
}

clearButton.onclick = clearText;
function clearText() {
  userGuess.value = '';
  guessButton.classList.remove('enableClass');
  clearButton.classList.remove('enableClass');
}

resetButton.onclick = resetGame;
function resetGame() {
  minRangeString.value = '';
  maxRangeString.value = '';
  userGuess.value = '';
  lastGuessMessage.textContent = '';
  userGuessValue.textContent = '';
  gameResponse.textContent = '';
  guessButton.classList.remove('enable-class');
  clearButton.classList.remove('enable-class');
}

userGuess.addEventListener('input', function() {
     guessButton.classList.add('enable-class');
     clearButton.classList.add('enable-class');
 });

instructionButton.onclick = getInstructions;
function getInstructions() {
  instruction1.innerText = "Enter a minimum and maximum value and a random number will be generated within that range";
  instruction2.innerText = "The random number will be the minimum value, the maximum value or any whole number in between";
  instruction3.innerText = "If you guess the random number correctly, the range will automatically increase";
}
