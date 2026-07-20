/*
Key Observations (Short)

Prefix always starts from the beginning of the string.
Every string must contain that prefix.
As soon as one character differs, stop.
If there is no common first character, return "".
The answer can never be longer than the shortest string.
*/

// 1. Brute Force (Character by Character) ⭐⭐⭐ (Most Common)
/*
Take the first string as a reference.
Check each character of the first string.
Compare that character with the same position in every other string.
If any character is different or one string ends, stop.
Whatever matched so far is the answer.
*/
