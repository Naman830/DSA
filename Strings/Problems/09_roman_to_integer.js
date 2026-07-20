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
