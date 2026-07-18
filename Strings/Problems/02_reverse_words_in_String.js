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

// OPTIMAL SOLUTION
/*
Trim the leading and trailing spaces.
Split the string into words using split(/\s+/) so multiple spaces are treated as one separator.
Reverse the array of words using the left and right pointers (or reverse()).
Join the reversed words using a single space.
Return the resulting string.
*/
