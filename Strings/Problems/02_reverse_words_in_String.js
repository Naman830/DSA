/*
You are given a string s.



Example 1
Input:
"the sky is blue"

Output:
"blue is sky the"

Rules: 
1. Your task is to reverse the order of the words, not the characters.
2. Multiple spaces between words should become only one space.
3. Extra spaces at the beginning and end should be removed.
*/

// 1. Brute Force
/*
Remove unnecessary spaces.
Split the string into words.
Reverse the array.
Join using one space.
*/

/*
LeetCode 151 - Reverse Words in a String

Given a string s, reverse the order of words.
Remove extra spaces.
*/

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

/*
TC: O(n)
SC: O(n)
*/

// 2. Optimal Approach (Without Using split() / reverse())
function reverseWordsOptimal(s) {
  let result = "";
  let i = s.length - 1;

  // Run loopp for reverse order
  while (i >= 0) {
    // Skip spaces
    while (i >= 0 && s[i] === " ") {
      i--;
    }

    // edge case
    if (i < 0) break;

    let j = i;

    // Find the beginning of the current word
    while (j >= 0 && s[j] !== " ") {
      j--;
    }

    // Add a space before the next word (except for the first one)
    if (result.length > 0) {
      result += " ";
    }

    // Append the current word
    result += s.substring(j + 1, i + 1);

    // Move to the previous word
    i = j;
  }

  return result;
}

// Test Cases
console.log(reverseWordsOptimal("the sky is blue"));
console.log(reverseWordsOptimal("  hello world  "));
console.log(reverseWordsOptimal("a good   example"));

/*
TC: O(n)
SC: O(n)
 */
