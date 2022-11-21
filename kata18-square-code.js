const squareCode = function(message) {
  // Put your solution here
  // remove all spaces
  let tempStr = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      tempStr = message.substr(0, i) + message.substr(i + 1);
      message = tempStr;
    }
  }
  // calculate entire length of string
  const strLength = message.length;

  // calculate square root of length of string + round square root up
  const squareRootString = Math.ceil(Math.sqrt(strLength));
  
  // split into array end of every square root length
  let tempArray = [];
  for (let j = 0; j < message.length; j++) {
    if (j % squareRootString === 0) {
      tempArray.push(message.substr((j), (squareRootString)));
    }
  }

  // grab the first letter of each item in the array and put it into a new array
  let finalArray = [];
  for (let k = 0; k < tempArray[0].length; k++) {
    tempStr = ""; //reset to empty
    for (let l = 0; l < tempArray.length; l++) {
      if (tempArray[l][k]) {
        tempStr += tempArray[l][k];
      }
    }
    finalArray.push(tempStr); //push the completed jumble into the new array
  }

  const finalString = function(finalArray) {
    tempStr = "";
    for (let m = 0; m < finalArray.length; m++) {
      if (m !== finalArray.length - 1) {
        tempStr += finalArray[m] + " ";
      } else {
        tempStr += finalArray[m];
      }
    }
    return tempStr;
  };

  return finalString(finalArray);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));