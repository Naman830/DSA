// Your task is to find the deepest level of nested parentheses.
/*
KEY OBSERVATION
Every ( means we are going one level deeper.
Every ) means we are coming one level back.
We only care about the highest depth reached.
Other characters don't matter.
*/

// This question is similar to remove outermost parenthis just return maxDepth

/*
Problem:
Time Complexity: O(n)
Space Complexity: O(1)
*/

function maxDepth(s) {
  // Stores current nesting depth
  let currentDepth = 0;

  // Stores the maximum depth found
  let maxDepth = 0;

  // Traverse every character
  for (let char of s) {
    // Going one level deeper
    if (char === "(") {
      currentDepth++;

      // Update maximum depth
      maxDepth = Math.max(maxDepth, currentDepth);
    }

    // Coming back one level
    else if (char === ")") {
      currentDepth--;
    }
  }

  return maxDepth;
}

// ----------------------
// Test Cases
// ----------------------

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(())")); // 2
console.log(maxDepth("()()")); // 1
console.log(maxDepth("abc")); // 0
console.log(maxDepth("(((())))")); // 4
console.log(maxDepth("")); // 0
