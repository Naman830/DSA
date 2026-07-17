/*
You are given a special linked list where:

Each node has:
next → points to the next node in the same row.
bottom → points to another sorted linked list.

The goal is to convert all these small sorted linked lists into one single sorted linked list using only the bottom pointer.

next →
5 ------> 10 ------> 19 ------> 28
|          |          |          |
7          20         22         35
|                     |          |
8                     50         40
|                                |
30                               45


5
|
7
|
8
|
10
|
19
|
20
|
22
|
28
|
30
|
35
|
40
|
45
|
50


1. Key Observations
Every bottom list is already sorted.
We need one final sorted list.
This is very similar to Merge K Sorted Lists.
Since each list is sorted, we can merge two sorted lists repeatedly.
*/

// BRUTE FORCE SOLUTION
/*
Traverse every linked list.
Push all values into an array.
Sort the array.
Create a new bottom linked list.
*/
