const numberOfVowels = function(data) {
  // loop through string and for every vowel found add 1 to vowels variable
  let vowels = 0;
  for (let i = 0; i < data.length; i++) {
    data = data.toLowerCase(); // assignment unclear as to whether we should account for upper case vowels as well so decided to go for it and add counting for that also
    if (data[i] == "a" || data[i] == "e" || data[i] == "i" || data[i] == "o" || data[i] == "u") {
      vowels++;
    }
  };
  return vowels;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("AEIOU"));