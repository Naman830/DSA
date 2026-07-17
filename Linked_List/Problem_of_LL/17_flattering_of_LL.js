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
*/
