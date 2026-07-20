/*
Your task is to arrange the characters in decreasing order of how many times they appear.

The character that appears the most should come first.
Then the second most frequent character.
Continue until all characters are placed.

2. Key Observations (Short)
Count how many times every character appears.
Characters with higher frequency come first.
Same frequency can appear in any order.
Uppercase and lowercase are different.
Spaces and symbols are also characters if present.
*/

/*
Brute Force

Idea:
Count frequency.
Compare every character with every other character.
Arrange manually.

This is slow because sorting manually using nested loops costs a lot.

Time: O(n²)
Not recommended.
*/

// 1. Better Solution (HashMap + Sorting)
/*
Count the frequency of every character using a Map.
Convert the map into an array of [character, frequency] pairs.
Sort the array in descending order of frequency.
Repeat each character according to its frequency and build the final string.
*/

function frequencySort(str) {
  // Step 1: Store frequency of each character
  const frequencyMap = new Map();

  for (const char of str) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  // Step 2: Convert Map into an array
  // Example:
  // [['t',1], ['r',1], ['e',2]]
  const frequencyArray = [...frequencyMap.entries()];

  // Step 3: Sort by frequency (Highest -> Lowest)
  frequencyArray.sort((a, b) => b[1] - a[1]);

  // Step 4: Build the answer string
  let result = "";

  for (const [char, frequency] of frequencyArray) {
    // Repeat the character "frequency" times
    result += char.repeat(frequency);
  }

  return result;
}

// -------------------------------
// Test Cases
// -------------------------------

console.log(frequencySort("tree")); // "eetr" or "eert"
console.log(frequencySort("cccaaa")); // "cccaaa" or "aaaccc"
console.log(frequencySort("Aabb")); // "bbAa" or "bbaA"
console.log(frequencySort("banana")); // "aaannb"
console.log(frequencySort("programming")); // Possible: "rrggmmponai"

/*
| Case    | Complexity         |
| ------- | ------------------ |
| Best    | **O(n + k log k)** |
| Average | **O(n + k log k)** |
| Worst   | **O(n + k log k)** |

n = length of the string
k = number of unique characters

SC: O(k)
*/

// 2. Optimal Solution (Bucket Sort)
/*
Instead of sorting the frequencies, notice that the maximum possible frequency is the length of the string (n).

Count the frequency of every character.
Create n + 1 buckets.
Put each character into the bucket corresponding to its frequency.
Traverse the buckets from highest frequency to lowest and build the answer.

This removes the sorting step and achieves O(n) time complexit
*/
