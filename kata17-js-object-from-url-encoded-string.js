const urlDecode = function(text) {
  let decodedObj = {};
  let tempKey = "";
  let tempValue = "";
  let keyCheck = true;
  for (let i = 0; i < text.length; i++) {
    switch (true) {
    case (keyCheck === true):
      if (text[i] === "=") {
        keyCheck = false;
        break;
      } else {
        tempKey = tempKey + text[i];
        break;
      }
    default:
      if (text[i] === "&") {
        keyCheck = true;
        decodedObj[tempKey] = tempValue;
        tempKey = "";
        tempValue = "";
        break;
      } else if (i === text.length - 1) {
        tempValue = tempValue + text[i];
        decodedObj[tempKey] = tempValue;
        tempKey = "";
        tempValue = "";
        break;
      } else if (text[i] === "%") {
        tempValue = tempValue + " ";
        i += 2;
        break;
      } else {
        tempValue = tempValue + text[i];
        break;
      }
    }
  }
  return decodedObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("muffin=chocolate%20chip&coffee=decaf%20latte&cup=to%20go"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
EXPECTED OUTPUT
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/