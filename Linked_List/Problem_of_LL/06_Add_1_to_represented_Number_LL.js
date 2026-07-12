/*
Imagine the linked list is a number written digit by digit.
1 → 2 → 3

means
123

After adding 1:
124

Output:
1 → 2 → 4

Key Observations
We add 1 only to the last digit.
If the last digit becomes 10, a carry is generated.
Carry keeps moving left until it becomes 0.
Singly linked lists cannot move backwards.
*/
