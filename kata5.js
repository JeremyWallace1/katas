const urlEncode = function(text) {
  // receive a string of words, and return that string with all of the whitespace characters converted to %20. 
  // If there is whitespace on the outside of the string, like in our second example, you should only replace the whitespace within the string.
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      text = text.slice(0, i) + "%20" + text.slice(i + 1, text.length);
    };
  }
  return text;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));