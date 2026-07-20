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
