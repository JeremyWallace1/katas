const organizeInstructors = function(instructors) {
  // Put your solution here
  // read course value for each object in instructors
  let organized = {};
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "Blockchain") {
      // if instructors[i].course is Blockchain, Blockchain.push(instructors.name)
      if (organized.Blockchain) {
        organized.Blockchain.push(instructors[i].name);
      } else {
        organized.Blockchain = [instructors[i].name];
      }
    } else if (instructors[i].course === "iOS") {
      // if instructors[i]course is iOS, iOS.push(instructors.name)
      if (organized.iOS) {
        organized.iOS.push(instructors[i].name);
      } else {
        organized.iOS = [instructors[i].name];
      }
    } else if (instructors[i].course === "Web") {
      // if instructors[i]course is Web, Web.push(instructors.name)
      if (organized.Web) {
        organized.Web.push(instructors[i].name);
      } else {
        organized.Web = [instructors[i].name];
      }
    }
  }
  return (organized);
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));


/*
EXPECTED OUTPUT
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}

{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/