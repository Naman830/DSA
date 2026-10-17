/*
Given a sorted array of unique integers, return the smallest list of ranges that covers every number in the array exactly once.

Input:  [0, 1, 2, 4, 5, 7]
Output: ["0->2", "4->5", "7"]

Key observation
- Start a range at the current number.
- Keep moving forward while the next number is exactly one greater than the current number.
- When the consecutive sequence ends, create a range.
- Continue from the next unprocessed number.
*/
