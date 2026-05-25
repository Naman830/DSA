// Hashing is not only for numbers. It is also used for characters.
// Given a string and queries, find how many times each character appears.

function countCharacterFrequency(str, queries) {
  // Create an empty map for character frequency
  const charMap = new Map();

  // Precompute frequency of every character in the string
  for (let ch of str) {
    if (charMap.has(ch)) {
      charMap.set(ch, charMap.get(ch) + 1);
    } else {
      charMap.set(ch, 1);
    }
  }

  // Answer each query
  for (let query of queries) {
    const count = charMap.get(query) || 0;
    console.log(`${query} appears ${count} times`);
  }
}

const str = "aabbccabc";
const queries = ["a", "b", "c", "d"];

countCharacterFrequency(str, queries);

// What If characters are only lowercase English letters a to z, we can use an array of size 26.

function countLowercaseCharacters(str, queries) {
  // Array of size 26 because there are 26 lowercase letters
  // frequency[0] stores count of 'a'
  // frequency[1] stores count of 'b'
  // frequency[25] stores count of 'z'
  const frequency = new Array(26).fill(0);

  // Precompute character frequencies
  for (let ch of str) {
    const index = ch.charCodeAt(0) - "a".charCodeAt(0);
    frequency[index]++;
  }

  // Answer queries
  for (let query of queries) {
    const index = query.charCodeAt(0) - "a".charCodeAt(0);
    console.log(`${query} appears ${frequency[index]} times`);
  }
}

const str = "aabbccabc";
const queries = ["a", "b", "c", "d"];

countLowercaseCharacters(str, queries);
