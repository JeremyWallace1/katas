const instructorWithLongestName = function(instructors) {
  // check length of name in each object in array
  // return object with longest name
  // if more than one with longest name, return the first one
  // loop over array to investigate each object
  let longestName = { //set empty array & objects within
      name: "",
      course: ""
  };
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.name.length) { //greater than, so if they are equal it doesn't perform an action and leaves the first one of that length as the result
      longestName = instructors[i];
    };
  };
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
]));
console.log(instructorWithLongestName([
  {name: "Patty Smith", course: "Rock"},
  {name: "Bono", course: "Shades"},
  {name: "Taylor Swift", course: "Guitar"},
  {name: "Björk Guðmundsdóttirr", course: "Electronic Music"}
]));
console.log(instructorWithLongestName([
  {name: "", course: ""}
]));

