/*
You are given a sentence (a string containing words separated by a single space) and an integer k.
Your task is to return only the first k words from the sentence.
Think of it like this:

Sentence:
"I love programming in JavaScript"

k = 3

Take only first 3 words:
"I"
"love"
"programming"

Answer:
"I love programming"

Key Observation
Words are separated by exactly one space.
There are no extra spaces at the beginning or end.
You only need the first k words.
Ignore all remaining words.
*/

/*
1. Brute Force Solution 
Split the sentence into an array of words.
Take the first k words.
Join them back into a sentence.
*/

function truncateSentence(s, k) {
  return s.split(" ").slice(0, k).join(" ");
}

/*
Time: O(n)
Space: O(n)
*/

// 2. OPtimal Solution
/*
It traverses the string only once.
No extra array is created.
Uses constant extra memory.
*/

function truncateSentenceOptimal(s, k) {
  let space = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      space++;
      if (space === k) {
        return s.slice(0, i);
      }
    }
  }
  return s;
}

// Test Cases
console.log(truncateSentenceOptimal("Hello how are you Contestant", 4));
console.log(truncateSentenceOptimal("What is the solution", 2));
console.log(truncateSentenceOptimal("I love coding", 3));
