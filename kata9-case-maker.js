const camelCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") { //find and ignore the space
      newInput += input[i + 1].toUpperCase(); //capitalize the letter after the space
      i++; //increment so that it skips the space
    } else {
      newInput += input[i]; //transfers the letter from the old input to newInput (as long as it isn't a space)
    }
  }
  return newInput;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));