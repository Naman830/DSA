// You have to find the element that appears more than n / 2 times, where n is the size of the array.
// frequency of element > n / 2

/*
Why Can There Be Only One Majority Element?

A very important interview point.
Can two elements both appear more than n / 2 times?

No.

Example:
If array size is 10,

Majority element must appear more than 5 times.

Suppose:
A appears 6 times
B appears 6 times

Total would become:
6 + 6 = 12

But array size is only 10.
Impossible.

So there can be only one majority element.
*/

// Approach 1: Brute Force
// For every element, count how many times it appears in the whole array.
// If its count is greater than n / 2, return it.

/*
Pseudo Code

for i from 0 to n - 1:
    count = 0

    for j from 0 to n - 1:
        if nums[j] == nums[i]:
            count++

    if count > n / 2:
        return nums[i]
*/
