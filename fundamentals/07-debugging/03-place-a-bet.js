function placeABet(guess) {
  // This is a function expression, not a declaration. A variable generateRandomInt is never created.
  // (function generateRandomInt() {
  //   return Math.floor(Math.random() * 25) + 1;
  // });
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  }

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return "Invalid guess. Valid guesses are between 1 and 25.";
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt("Input a guess between 1-25"), 10);
alert(placeABet(userGuess));
