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
