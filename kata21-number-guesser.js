let prompt = require("prompt-sync")(
  {
    "dependencies": {
      "prompt-sync": "^4.1.5"
    }
  }
);

const randomNumber = Math.floor(Math.random() * (100) + 1); // generate a random number between 1 and 100 (inclusive)
let answer;
let attempts = [];

const numberGuesser = function() {
  do { // do...while loop so it runs at least once
    answer = prompt("Guess a number: ");
    if (Number(answer) === randomNumber) { //i nput is as string so need to convert to a number
      attempts.push(Number(answer));
      return console.log("You got it! You took " + (attempts.length) + " attempts!");
    } else if (Number(answer) < randomNumber) {
      if (attempts.includes(Number(answer))) { // not counted as an attempt if it was already attempted
        console.log("Already Guessed!");
      } else {
        attempts.push(Number(answer));
        console.log("Too Low!");
      }
    } else if (Number(answer) > randomNumber) {
      if (attempts.includes(Number(answer))) { // not counted as an attempt if it was already attempted
        console.log("Already Guessed!");
      } else {
        attempts.push(Number(answer));
        console.log("Too High!");
      }
    } else if ((typeof answer) !== "number") { // not counted as an attempt as it is not a number
      console.log("Not a number! Try again!");
    }
  } while (answer !== randomNumber); // keeps running until the number inputted by user matches the randomly generated number
};

numberGuesser();