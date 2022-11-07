const conditionalSum = function(values, condition) {
  // loop through numbers testing condition
  // if match condition add to new variable (sum of all those that match the condition)
  let sumNumbers = 0;
  for (let i = 0; i < values.length; i++) {  // loop through numbers 
    if ((condition === "even") && (values[i] % 2 === 0)) { // testing even condition
      sumNumbers += values[i];
    } else if ((condition === "odd") && (values[i] % 2 !== 0)) { // testing odd condition
        sumNumbers += values[i];
    } 
  }
  return (sumNumbers);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([101, 102, 103, 104, 105, 106, 107, 108, 109, 110], "even"));
console.log(conditionalSum([101, 102, 103, 104, 105, 106, 107, 108, 109, 110], "odd"));
console.log(conditionalSum([100, 111, 222, 333], "monkey"));