/*
Suppose you have:
cat dog bird

After reversing the words:
bird dog cat

Not
tac god drib

That would be reversing letters, which is a completely different problem.

KEY OBSERVATION
A word is a group of characters separated by spaces.
Reverse the order of words, not the letters.
Ignore extra spaces.
Final answer should have only one space between words.
Don't worry about coding yet—first understand that you're simply rearranging whole words.
*/

// Brute force Soltuion
/*
Trim the leading and trailing spaces.
Split the string into words using split(/\s+/) so multiple spaces are treated as one separator.
Reverse the array of words using the left and right pointers (or reverse()).
Join the reversed words using a single space.
Return the resulting string.
*/

let s = "  the   sky is   blue  ";

let answer = s.trim().split(/\s+/).reverse().join(" ");

console.log(answer);

// TC: O(n) && SC: O(n)

// TWO POINTER APPROACH
/*
1. Traverse the string from the end.
2. Skip all extra spaces.
3. Find one complete word.
4. Add the word to the answer.
5. Repeat until the entire string is processed.
*/

function reverseWords(s) {
  let answer = "";
  // Start from the last character
  let i = s.length - 1;

  // Traverse until we reach the beginning
  while (i >= 0) {
    // Step 1: Skip extra spaces
    while (i >= 0 && s[i] === " ") {
      i--;
    }
    // If we reached the beginning after skipping spaces, stop.
    if (i < 0) break;

    // Step 2: Mark the end of current word
    let end = i;

    // Move left until we reach a space
    while (i >= 0 && s[i] !== " ") {
      i--;
    }
    // Step 3: Extract the word
    // substring(start, end)
    // end + 1 because substring's end index is exclusive

    let word = s.substring(i + 1, end + 1);

    // Step 4: Add word to answer
    // Don't add space before the first word.
    if (answer.length === 0) {
      answer = word;
    } else {
      answer += " " + word;
    }
  }
  return answer;
}

// ----------------------------
// Test Cases
// ----------------------------
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
console.log(reverseWords("    Bob    Loves   Alice   "));
console.log(reverseWords("single"));

// TC: O(n) && SC: O(1)
