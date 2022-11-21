const multiplicationTable = function(maxValue) {
  // Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.
  let product = "";
  for (let i = 1; i <= maxValue; i++) { // outer loop
    for (let j = 1; j <= maxValue; j++) { // inner loop
      product += i * j + " ";
    }
    product += "\n";
  }
  return (product);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));