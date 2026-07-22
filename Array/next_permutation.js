/*
You are given an array representing a permutation of numbers.
Your task is to find the next lexicographically greater permutation.
If no greater permutation exists (the array is in descending order), return the smallest permutation (ascending order).

Example
Input:  [1,2,3]
Output: [1,3,2]

Reason:
Permutations:
123
132  ← Next permutation
213
231
312
321

Another example:
Input:  [3,2,1]
Output: [1,2,3]

Reason:
321 is the last permutation.
So we return the first permutation.
*/

// note:- DON'T WRITE BRUTE FORCE APPROACH IN INTERVIEW BECAUSE IT IS LONG BY USING RECURSSION AND NOT GOOD BECAUSE IT SHOW TIME LIMIT EXCEDEED ONLY TELL THINKING ABOUT BRUTE FORCE

// Brute Force
/*
Idea
    Generate all permutations.
    Sort them.
    Find the current permutation.
    Return the next one.

Time Complexity
O(N! × N)

Very slow.
*/

// Optimal Approach
/*
A "pivot number" generally refers to a specific reference value or index used as a central point to determine market trends, mathematical states, or algorithm directions

Step 1
Find the first number from the right that is smaller than its next element.
or
Greater number next is always small and find the breakpoint which is between 2 and 7
1 2  7 4 3 1
    ^

Step 2
Again move from the right and fint the greater number then 1 index 

    |
1 2 | 7 4 3 1
  ^ |     ^   

Step 3
Reverse everything after the pivot or breakpoint

    |[REVERSE]
1 3 | 7 4 2 1
    |        
*/

function nextPermutation(nums) {
  const n = nums.length;

  // Step 1: Find the pivot
  let pivot = n - 2;

  while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) {
    pivot--;
  }

  if (pivot >= 0) {
  }
}

// Test Cases
console.log(nextPermutation([1, 2, 3])); // [1,3,2]
console.log(nextPermutation([3, 2, 1])); // [1,2,3]
console.log(nextPermutation([1, 1, 5])); // [1,5,1]
console.log(nextPermutation([1, 3, 2])); // [2,1,3]
console.log(nextPermutation([2, 3, 1])); // [3,1,2]
