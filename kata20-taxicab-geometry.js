const blocksAway = function(directions) {
  // Put your solution here
  //console.log(directions.length);
  let facing = "north";
  let newLocation = [0, 0];
  for (let i = 0; i < directions.length; i += 2) {
    //console.log(i);
    switch (facing) {
    case "north":
      if (directions[i] === "right") {
        newLocation[0] = newLocation[0] + directions[i + 1];
        facing = "east";
        //console.log(newLocation + ", " + facing);
      } else if (directions[i] === "left" && i === 0) {
        newLocation[1] = newLocation[1] + directions[i + 1];
        facing = "north";
        //console.log(newLocation + ", " + facing);
      } else {
        newLocation[0] = newLocation[0] - directions[i + 1];
        facing = "west";
        //console.log(newLocation + ", " + facing);
      }
      break;
    case "east":
      if (directions[i] === "right") {
        newLocation[1] = newLocation[1] - directions[i + 1];
        facing = "south";
        //console.log(newLocation + ", " + facing);
      } else {
        newLocation[1] = newLocation[1] + directions[i + 1];
        facing = "north";
        //console.log(newLocation + ", " + facing);
      }
      break;
    case "west":
      if (directions[i] === "right") {
        newLocation[1] = newLocation[1] + directions[i + 1];
        facing = "north";
        //console.log(newLocation + ", " + facing);
      } else {
        newLocation[1] = newLocation[1] - directions[i + 1];
        facing = "south";
        //console.log(newLocation + ", " + facing);
      }
      break;
    case "south":
      if (directions[i] === "right") {
        newLocation[0] = newLocation[0] - directions[i + 1];
        facing = "west";
        //console.log(newLocation + ", " + facing);
      } else {
        newLocation[0] = newLocation[0] + directions[i + 1];
        facing = "east";
        //console.log(newLocation + ", " + facing);
      }
      break;
    }
  }
  const newObject = {east: newLocation[0], north: newLocation[1]};
  return newObject;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));