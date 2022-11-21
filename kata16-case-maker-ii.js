const makeCase = function(input, tocase) {
  // Put your solution here
  let multiCase = input;
  if (typeof tocase === "object") {
    for (let i of tocase) {
      if (i === "camel" || i === "pascal" || i === "snake" || i === "kebab" || i === "title") {
        multiCase = whichCase(multiCase, i);
      }
    }
    for (let j of tocase) {
      if (j === "vowel" || j === "consonant") {
        multiCase = whichCase(multiCase, j);
      }
    }
    for (let k of tocase) {
      if (k === "upper" || k === "lower") {
        multiCase = whichCase(multiCase, k);
      }
    }
  return multiCase;
  } else {
    return whichCase(input, tocase);
  }
};

const whichCase = function(input, caseType) {
  let newCase = "";
  if (caseType === "camel") {
    newCase = camelCase(input);
  } else if (caseType === "pascal") {
    newCase = pascalCase(input);
  } else if (caseType === "snake") {
    newCase = snakeCase(input);
  } else if (caseType === "kebab") {
    newCase = kebabCase(input);
  } else if (caseType === "title") {
    newCase = titleCase(input);
  } else if (caseType === "vowel") {
    newCase = vowelCase(input);
  } else if (caseType === "consonant") {
    newCase = consonantCase(input);
  } else if (caseType === "upper") {
    newCase = upperCase(input);
  } else if (caseType === "lower") {
    newCase = lowerCase(input);
  }
  return(newCase);
}

const camelCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") { //find and ignore the space
      newInput += input[i+1].toUpperCase(); //capitalize the letter after the space
      i++; //increment so that it skips the space
    } else {
      newInput += input[i]; //transfers the letter from the old input to newInput (as long as it isn't a space)
    }
  }
  return newInput;
};

const pascalCase = function(input) {
  // Your code here
  let newInput = "";
  newInput += input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === " ") { //find and ignore the space
      newInput += input[i+1].toUpperCase(); //capitalize the letter after the space
      i++; //increment so that it skips the space
    } else {
      newInput += input[i]; //transfers the letter from the old input to newInput (as long as it isn't a space)
    }
  }
  return newInput;
};

const snakeCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") { //find the space and replace with "_"
      newInput += "_";
    } else {
      newInput += input[i]; //transfers the letter from the old input to newInput (as long as it isn't a space)
    }
  }
  return newInput;
};

const kebabCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") { //find the space and replace with "_"
      newInput += "-";
    } else {
      newInput += input[i]; //transfers the letter from the old input to newInput (as long as it isn't a space)
    }
  }
  return newInput;
};

const titleCase = function(input) {
  // Your code here
  let newInput = "";
  newInput += input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === " ") { //find and ignore the space
      newInput += input[i];
      newInput += input[i+1].toUpperCase(); //capitalize the letter after the space
      i++;
    } else {
      newInput += input[i]; //transfers the letter from the old input to newInput (as long as it isn't a space)
    }
  }
  return newInput;
};

const vowelCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    if ((input[i]) === "a" || (input[i]) === "e" || (input[i]) === "i" || (input[i]) === "o" || (input[i]) === "u") {
      newInput += input[i].toUpperCase(); //capitalize the vowel
    } else {
      newInput += input[i];
    }
  }
  return newInput;
};

const consonantCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    if ((input[i]) !== "a" && (input[i]) !== "e" && (input[i]) !== "i" && (input[i]) !== "o" && (input[i]) !== "u") {
      newInput += input[i].toUpperCase(); //capitalize the consonant
    } else {
      newInput += input[i];
    }
  }
  return newInput;
};

const upperCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    newInput += input[i].toUpperCase();
      //transfers the letter from the old input to newInput and capitalizes it
  }
  return newInput;
};

const lowerCase = function(input) {
  // Your code here
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    newInput += input[i].toLowerCase();
      //transfers the letter from the old input to newInput and capitalizes it
  }
  return newInput;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["kebab", "consonant", "title"]));