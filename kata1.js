const sumLargestNumbers = function(data) {
  let numSecondLargest = 0;
  let numLargest = 0;
  let sumNumbers = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= numLargest) {
      numSecondLargest = numLargest;
      numLargest = data[i];
    }
  }
  return(numSecondLargest + numLargest)
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));