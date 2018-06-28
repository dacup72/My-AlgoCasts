// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let result = [];
  let startColumn = 0;
  let startRow = 0;
  let endColumn = n - 1;
  let endRow = n - 1;

  for (let index = 0; index < n; index++) {
    result.push([]);
  }

  let count = 1;
  while (startColumn <= endColumn && startRow <= endRow) {

    // Top Row
    for (let index = startColumn; index <= endColumn; index++) {
      result[startRow][index] = count;
      count++;
    }
    startRow++;

    // Right Column
    for (let index = startRow; index <= endRow; index++) {
      result[index][endColumn] = count;
      count++;
    }
    endColumn--;

    // Bottom Row
    for (let index = endColumn; index >= startColumn; index--) {
      result[endRow][index] = count;
      count++
    }
    endRow--;

    // Left Column
    for (let index = endRow; index >= startRow; index--) {
      result[index][startColumn] = count;
      count++;
    }
    startColumn++;
  }

  return result;
}




module.exports = matrix;
