/*
Explanation:- 
For each bar, find how far it can extend left and right.

Formula:- Rectangle Area = height × width

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

/*
Largest Rectangle in Histogram — Intuition

1. For every bar, find:
   → Previous Smaller Element (PSE)
   → Next Smaller Element (NSE)

2. These smaller bars tell us where our current bar
   can STOP extending.

   PSE ← current bar → NSE

3. So the width of the rectangle is:

   width = NSE - PSE - 1

4. Then:

   area = height × width

   area = currentElement × (NSE - PSE - 1)

5. We use a monotonic increasing stack to find
   PSE/NSE efficiently.
*/
