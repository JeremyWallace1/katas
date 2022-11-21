const checkAir = function(samples, threshold) {
  // Code here!
  // count cleans
  let dirty = 0;
  let total = 0;
  for (let i in samples) {
    if (samples[i] === "dirty") {
      dirty++; // count dirties
    }
    total++; // count total number
  }
  const ratio = dirty / total; // dirty / total = ratio (as decimal)

  if (ratio >= threshold) { // if ratio >= threshold then return "Polluted" else return "Clean"
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.4
));