/*
What is Division Method?
The division method is one of the simplest hashing methods.

Formula: hash(key) = key % tableSize

Here:
% means remainder

So we divide the key by the table size and use the remainder as the index.
*/


/*
What is Collision?
A collision happens when two different keys get the same hash index.

Collision happens because hash table size is limited.
Suppose table has only 10 slots:

0 to 9

But keys can be many:

25, 35, 45, 55, 65, 75...

All these keys give same remainder with 10:

25 % 10 = 5
35 % 10 = 5
45 % 10 = 5
55 % 10 = 5
65 % 10 = 5

So all these keys go to index 5.

That is collision.
*/


/*
9. Collision handling techniques
When collision happens, we need a way to handle it.

Common methods:
1. Separate Chaining
2. Open Addressing
   - Linear Probing
   - Quadratic Probing
   - Double Hashing

For now, understand collision with the easiest method: Separate Chaining.

*/

/*
10. Separate Chaining
In separate chaining, every index stores a list.

So if many keys go to the same index, we put them inside the same list.

Example:
tableSize = 10
keys = 25, 35, 45

Hash:
25 % 10 = 5
35 % 10 = 5
45 % 10 = 5

Instead of only one value at index 5, we store a list:
Index 5 -> [25, 35, 45]

Hash table:

Index  Value
0      []
1      []
2      []
3      []
4      []
5      [25, 35, 45]
6      []
7      []
8      []
9      []

This solves the collision.
*/