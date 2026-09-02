/*
Explanation:-
1. Given n pairs of parentheses, generate all valid combinations.
2. The important part is that every ( must eventually have a matching ) and the parentheses must never become invalid.

Key Observations:- 
For n = 3:

Total ( available = 3
Total ) available = 3

i. We can add ( if: open < n

ii. We can add ) only if: close < open

Why close < open?
Because we cannot close something that hasn't been opened.

For example:
")(" ❌ is invalid.

But:
"()" ✅ is valid.
*/
function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    // If we have used all n opening and closing parentheses,
    // we have created one complete valid combination.
    if (open === n && close === n) {
      result.push(current);
      return;
    }

    // We can add '(' as long as we haven't used all n.
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // We can add ')' only when there is an unmatched '('.
    // Therefore, close must always be less than open.
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  // Start with an empty string and zero parentheses used.
  backtrack("", 0, 0);

  return result;
}

// Test cases
console.log(generateParenthesis(1));
// ["()"]

console.log(generateParenthesis(2));
// ["(())", "()()"]

console.log(generateParenthesis(3));
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
