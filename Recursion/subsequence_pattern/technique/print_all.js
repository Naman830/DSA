/*
Explanation:-
In recursion, “Print All” usually means:

We are given something like an array/string and need to generate all possible choices/combinations/subsequences.

🧠 The core pattern
For every element, we usually have 2 choices:
This is the most important idea for Print All Subsequences.             

                [3, 1, 2]
                   |
              take / skip
                 /     \
               3        []
              / \       / \
            take skip take skip
             /     \     ...
*/
