/*
Start from the outer boundary of the matrix and keep moving in a spiral:

Right → Down → Left → Up
Then move to the next inner layer and repeat until all elements are visited.

What is the problem asking?
Given an m × n matrix, print or return all elements in spiral order.

1 → 2 → 3
          ↓
4    5    6
↑         ↓
7 ← 8 ← 9

row = ------------
column = |
column = |
column = |

*/

/*
Pseudocode

while top <= bottom and left <= right

    traverse top row
    top++

    traverse right column
    right--

    if top <= bottom
        traverse bottom row
        bottom--

    if left <= right
        traverse left column
        left++

return result
*/

function spiralOrder(matrix) {
  let result = [];

  let top = 0;
  let bottom = matrix.length - 1;

  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse Top Row
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // Traverse Right Column
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    // Traverse Bottom Row
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // Traverse Left Column
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }

  return result;
}
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
