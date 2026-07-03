/*
You are given a valid parentheses string.
Your task is to remove the outermost pair of parentheses from every primitive valid parentheses string.

Example
Input:  "(()())(())"

Primitive 1: (()())
Remove outermost -> ()()

Primitive 2: (())
Remove outermost -> ()

Output: "()()()"

Key Observations
The string is always valid.
It may contain multiple primitive strings.
A primitive is the smallest valid parentheses string that cannot be divided into two valid parts. 
*/

/*
3. Brute Force Idea
Approach

Find each primitive separately.
Remove its first ( and last ).
Join the remaining parts.

This works but requires identifying every primitive first.
*/
/*
LeetCode 1021 - Remove Outermost Parentheses (Brute Force)

Approach:
1. Find each primitive valid parentheses string.
2. Remove its first and last parentheses.
3. Append the remaining part to the answer.
*/

function removeOuterParentheses(s) {
  let balance = 0;
  let start = 0;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    // Update balance
    if (s[i] === "(") {
      balance++;
    } else {
      balance--;
    }

    // Found one primitive
    if (balance === 0) {
      // Remove outermost parentheses
      result += s.substring(start + 1, i);

      // Next primitive starts here
      start = i + 1;
    }
  }

  return result;
}

// Test Cases
console.log(removeOuterParentheses("(()())(())")); // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParentheses("()()")); // ""

/*
TC: O(n)
SC: O(n)
*/

// 2. Optimal Idea
/*
Dry Run

Input
(()())

Start
depth = 0
answer = ""

| Character | Depth Before | Action                   | Depth After | Answer |
| --------- | ------------ | ------------------------ | ----------- | ------ |
| (         | 0            | Skip (outermost)         | 1           | ""     |
| (         | 1            | Keep                     | 2           | "("    |
| )         | 2            | Keep                     | 1           | "()"   |
| (         | 1            | Keep                     | 2           | "()("  |
| )         | 2            | Keep                     | 1           | "()()" |
| )         | 1            | Skip (outermost closing) | 0           | "()()" |

*/

function removeOuterParenthesesOptimal(s) {
  let depth = 0;
  let result = "";

  for (let ch of s) {
    if (ch === "(") {
      if (depth > 0) {
        result += ch;
      }
      depth++;
    } else {
      depth--;
      if (depth > 0) {
        result += ch;
      }
    }
  }
  return result;
}

// Test Cases
console.log(removeOuterParenthesesOptimal("(()())(())")); // "()()()"
console.log(removeOuterParenthesesOptimal("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParenthesesOptimal("()()")); // ""

/*
TC: O(n)
SC: O(n)
*/
