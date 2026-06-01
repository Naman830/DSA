/*
A number is a leader if no bigger number exists after it.

arr = [16, 17, 4, 3, 5, 2]

16 → right side has 17, so 16 is not leader
17 → right side has 4, 3, 5, 2. All are smaller, so 17 is leader
4  → right side has 5, so 4 is not leader
3  → right side has 5, so 3 is not leader
5  → right side has 2, so 5 is leader
2  → nothing on right side, so last element is always leader

Key Rule:
The last element is always a leader, because there is no element on its right.
*/