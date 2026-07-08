/*
EXPLANATION :-
You are given two linked lists where each node contains a single digit
The digits are stored in reverse order.

Example:
List 1: 2 → 4 → 3
List 2: 5 → 6 → 4

These actually represent the numbers:
342
+
465
----
807

The answer should also be stored in reverse order.
7 → 0 → 8

Key Observations
Every node contains one digit (0-9).
Addition is performed exactly like we do on paper.
We must keep track of the carry.
The linked lists can have different lengths.
If a carry remains after the last nodes, create one more node.
*/
