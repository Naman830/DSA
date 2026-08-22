/*
Explanation:-
For each bar, find how far it can extend left and right.

Example:-
heights = [2, 1, 5, 6, 2, 3]

             ┌───┐
         ┌───┤ 6 │
     ┌───┤ 5 ├───┤
     │   │   │   │
 ┌───┤   │   │   │
 │ 2 │ 1 │   │   │ 2 ┌───┐
 └───┴───┴───┴───┴───┴ 3 ┘

The answer is 10:
     ┌───┐ ┌───┐
     │ 5 │ │ 5 │
     │   │ │   │
     └───┴─┴───┘
       width = 2

       5 × 2 = 10
*/
