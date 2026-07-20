/*
Key Observations (Interview)
Convert every Roman character into its numeric value.
Normally add every value.
If current value is smaller than next value, subtract it.
Otherwise, add it.
Traverse the string once.
*/

// Optimal Approach
/*
Go from left to right.

For every character,
If current value < next value
      subtract current
Else
      add current
*/

/*
Pseudocode
Create a map of Roman values

answer = 0

Loop through string

    current = value of current character
    next = value of next character

    If current < next
         subtract current
    Else
         add current

Return answer
*/
