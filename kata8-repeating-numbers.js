const repeatNumbers = function(data) {
  // Put your solution here
  // return a string with each of the given values repeated the appropriate number of times
  // multiple sets of values each set should be separated by a comma
  let innerArray = [];
  for (let i in data) { //outer loop to go through each array in "data"
    if (i > 0) {
      innerArray += ", ";
    }
    for (let j = 0; j < data[i][1]; j++) { //inner loop to go through each value in the inner array.
      innerArray += data[i][0];
    }
  }
  // If there is only one set of values then you should omit the comma.
  return (innerArray);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));