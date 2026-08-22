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
Largest Rectangle in Histogram — Intuition [Optimal Solution]

1. For every bar, find:
   → Previous Smaller Element (PSE)
   → Next Smaller Element (NSE)

2. These smaller bars tell us where the current bar
   can stop extending.

   PSE ← current bar → NSE

3. So the maximum width for the current bar is:

   width = NSE - PSE - 1

4. Rectangle area is:

   area = height × width

   area = currentElement × (NSE - PSE - 1)

5. Use a monotonic increasing stack to find
   PSE/NSE efficiently.

6. Find the maximum area among all bars.
*/
