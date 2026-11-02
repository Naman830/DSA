/*
Explanation:-
Given an n × n matrix where each row and column is sorted in ascending order, find the kth smallest element.

const matrix = [
  [1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
];
const k = 8;

1, 5, 9, 10, 11, 12, 13, 13, 15
The 8th smallest element is 13.
 */

/*
Key observations
- Every row is sorted in ascending order.
- Every column is sorted in ascending order.
- We need the element at position k in sorted order.
- We don't necessarily need to sort the entire matrix.
- We can exploit the sorted property to optimize our solution.
*/

/*
Brute force: Flatten and sort
ntuition: Put all matrix elements into a single array, sort them, and return the element at index k - 1.

Time: O(n² log(n²)) = O(n² log n)
Space: O(n²) for the flattened array.
*/

/*
Optimal solution: Binary Search on Answer
Instead of searching for an element's position, we binary search on the possible answer values.

Complexity	Value	                       Reason
Time	    O(n × log(max-min+1))	       Binary search × staircase traversal
Space   	O(1)	                       Only a few variables
*/
function kthSmallest(matrix, k) {
  const n = matrix.length;

  // Minimum and maximum possible answers
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    let count = 0;

    // Start from bottom-left
    let row = n - 1;
    let col = 0;

    // Count elements <= mid
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        // All elements to the left in this row
        // are also <= mid
        count += row + 1;

        col++;
      } else {
        // Current element is too large
        row--;
      }
    }

    // Binary search decision
    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

console.log(kthSmallest(matrix, 8)); // 13

/*
VISUAL EXPLANATION OF SOLUTION
low = 1;
high = 15;
mid = Math.floor((1 + 15) / 2);

mid = 8
Counting

     C0    C1    C2

R0    1     5     9
      ↑

R1   10    11    13
      ↑

R2   12    13    15
      ↑


Traversal from bottom-left
1. 12 > 8 → Move UP.
2. 10 > 8 → Move UP.
3. 1 <= 8 → count += 1.
4. 5 <= 8 → count += 1.
5. 9 > 8 → Move UP, traversal ends.
   
Total count 2
   
Elements: 1, 5
*/
