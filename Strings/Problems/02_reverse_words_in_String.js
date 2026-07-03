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

// Test Cases
console.log(reverseWords("the sky is blue"));
// blue is sky the

console.log(reverseWords("  hello world  "));
// world hello

console.log(reverseWords("a good   example"));
// example good a

/*
TC: O(n)
SC: O(n)
*/
