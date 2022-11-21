// const urlDecode = function(text) {
//   // Put your solution here
//   // %20 represents a space character.
//   // Key-value pairs are represented using an = character: key=value
//   // Multiple key-value pairs are separated using a & character:
//   // e.g. key1=value1&key2=value2
//   while (text.includes("%20") == true) {
//     text = text.replace("%20", " ");
//   }
//   let object = {};
//   key = getKey(text);
//   value = getValue(text);
//   if (value.includes("=") == false) {
//     object[key] = value;
//     return object;
//   } else {
//     let keyTwo = getKey(value);
//     let valueTwo = getValue(value);
//     object[key] = whereAmpersand(value);
//     object[keyTwo] = valueTwo;
//     return object;
//   }
// };

// const getKey = function(text) {
//   let start = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === "&") {
//       start = i+1;
//     }
//     if (text[i] === "=") {
//       let newKey = text.slice(start, i);
//       return newKey;  
//     }
//   }
// }

// const getValue = function(text) {
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === "=") {
//       let newValue = text.slice(i+1, text.length);
//       return newValue;  
//     }
//   }
// }

// const whereAmpersand = function(text) {
//   for (i = 0; i < text.length; i++) {
//     if (text[i] === "&") {
//       let newText = text.slice(0, i);
//       return newText;
//     }
//   }
// }

const urlDecode = function(text) {
  let decodedObj = {};
  let tempKey = "";
  let tempValue = "";
  let keyCheck = true;
  for(let i = 0; i < text.length; i++) {
    switch(true) {
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
        } else if (i === text.length-1) {
          tempValue = tempValue + text[i];
          decodedObj[tempKey] = tempValue;
          tempKey = "";
          tempValue = "";
          break;
        } else if (text[i] ==="%") {
          tempValue = tempValue + " ";
          i += 2
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