/*
You are given an array containing positive and negative numbers.

You need to rearrange the array so that:

Positive and negative numbers come alternately.
The first element should be positive.
The relative order of positive numbers should remain the same.
The relative order of negative numbers should remain the same.

Since the answer starts with positive:

positive, negative, positive, negative, positive, negative

Positive numbers will always be placed at even indices:
0, 2, 4, 6...

Negative numbers will always be placed at odd indices:
1, 3, 5, 7...
*/

// 1. Brute Force Approach
// First collect all positive numbers in one array.
// Then collect all negative numbers in another array.
// Then merge them alternately.

/*
Pseudocode

create positives array
create negatives array

for each number in nums:
    if number is positive:
        add it to positives
    else:
        add it to negatives

create answer array

for i from 0 to positives.length - 1:
    add positives[i] to answer
    add negatives[i] to answer

return answer
*/
