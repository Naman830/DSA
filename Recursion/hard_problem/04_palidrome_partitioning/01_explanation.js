/*
Explanation:-
Given a string s, partition it into pieces such that every piece is a palindrome.

Return all possible palindrome partitions.

Example
Input:  "aab"

Possible partitions:
["a", "a", "b"]   → all are palindrome
["aa", "b"]       → all are palindrome

Answer:
[
  ["a", "a", "b"],
  ["aa", "b"]
]
*/

/*
Key Observations
The important idea is:
At every position, try every possible substring.

For "aab"
a | ab
aa | b
aab

Then:
"a" → palindrome ✅ → continue
"ab" → not palindrome ❌
"aa" → palindrome ✅ → continue
"b" → palindrome ✅ → answer

So the pattern is:

Choose → Check palindrome → Recurse → Undo
This is Backtracking.
*/
