/*
The goal is to take an array of distinct numbers and generate every possible ordering of those numbers.

                           []
                  /       |       \
                 1        2        3
               /   \    /   \    /   \
              2     3  1     3  1     2
              |     |  |     |  |     |
              3     2  3     1  2     1

             [1,2,3] [1,3,2] ...
    
1. Key observations
Every number must appear exactly once in each permutation.
Order matters: [1,2,3] and [2,1,3] are different.
Numbers are guaranteed to be unique.
If n is the array length, there are exactly n! permutations.
n <= 6, so at most 6! = 720 answers.
*/
