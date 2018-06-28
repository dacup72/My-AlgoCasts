// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {

//   let str = [];

//   for (let i = 0; i < n; i++) {
//     str.push(" ");
//   }

//   for (let i = 0; i < n; i++) {
//     str[i] = "#";
//     console.log(str.join(""));
//   }

// }


// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let result = "";

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         result += "#";
//       } else {
//         result += " ";
//       }
//     }
    
//     console.log(result);
//   }
// }


function steps(n, row = 0, result = "") {
  if(row === n) {
    return;
  }
  if(n === result.length) {
    console.log(result);
    steps(n, row + 1);
    return;
  } 
  

  if(row >= result.length) {
    result += "#"; 
  } 
  else {
    result += " ";
  }

  steps(n, row, result)
}

steps(10)

module.exports = steps;
