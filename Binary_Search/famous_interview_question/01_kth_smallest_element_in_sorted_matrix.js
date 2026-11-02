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
