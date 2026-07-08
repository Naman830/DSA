/*
EXPLANATION:-

The problem is NOT about odd and even values.
It is about odd and even positions (indices) of nodes.
For example,

Input:
1 → 2 → 3 → 4 → 5

Positions:
1st  2nd  3rd  4th  5th

Odd Position Nodes:
1 → 3 → 5

Even Position Nodes:
2 → 4

Output:
1 → 3 → 5 → 2 → 4

Notice:
Node values don't matter.
Only their positions matter.

Key Observations
We must rearrange nodes.
Do not create new nodes.
Maintain the relative order of odd nodes.
Maintain the relative order of even nodes.
Use O(1) extra space.
*/

/*
1. BRUTE FORCE APPROACH
Connect all odd-position nodes.
Connect all even-position nodes.
Finally make the last node point to null.
*/
