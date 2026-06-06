/*
Given an array of size n, find all elements that appear more than ⌊n/3⌋ times.
Maximum 2 elements can appear more than n/3 times

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]


For Majority Element I: Element appears more than n/2 times.

Imagine every majority candidate is fighting against other numbers.

Whenever three different numbers meet:
a
b
c
none of them can help become majority.

So we can cancel them out.
This is exactly the idea behind: Boyer-Moore Voting Algorithm (Extended)

We maintain:
candidate1
candidate2

count1
count2

Because there can be at most 2 majority elements.
*/
