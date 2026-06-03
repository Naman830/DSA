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
