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
