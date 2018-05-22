// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let intArray = n.toString().split("");
  let negative = false;
  let reverseIntString = "";

  if(n === 0 || n === -0){
    return n;
  }

  for (let index = 0; index < intArray.length; index++) {
    if(reverseIntString === "" && intArray[index] === "0") {
      null;
    } else if(intArray[index] === "-") {
      negative = true;
    } else {
      reverseIntString = intArray[index] + reverseIntString;
    }
  }

  if(negative) {
    reverseIntString = "-" + reverseIntString;
    return parseInt(reverseIntString);
  } else {
    return parseInt(reverseIntString);
  }
}

module.exports = reverseInt;
