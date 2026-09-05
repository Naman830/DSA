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

/*
Complexity
Let n = s.length.

Time :- The number of possible partitions can be exponential, so:
| Case    | Complexity    |
| ------- | ------------- |
| Best    | **O(n · 2ⁿ)** |
| Average | **O(n · 2ⁿ)** |
| Worst   | **O(n · 2ⁿ)** |

Space
| Case    | Complexity                                      |
| ------- | ----------------------------------------------- |
| Best    | **O(n)** recursion/path space, excluding output |
| Average | **O(n)** recursion/path space, excluding output |
| Worst   | **O(n)** recursion/path space, excluding output |
*/
