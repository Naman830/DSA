/*
Explanation:-
You are given a string of digits from 2 to 9.
Each digit represents some letters, just like on an old phone keypad:
You need to return all possible strings that can be formed by choosing one letter from each digit.

Key Observation:-
Every digit = one recursion level.
At each level, we have 3 or 4 choices.
We choose one letter and move to the next digit.
When all digits are processed, we have one complete answer.
After exploring one choice, we backtrack and try the next choice.
If digits === "", return [].
*/

/*
digits = "23"
So the recursion tree looks like:

                    ""
             /       |       \
            a        b        c
          / | \    / | \    / | \
        ad ae af  bd be bf  cd ce cf
*/
