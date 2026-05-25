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

Simple meaning:
Two people want the same locker.

Example:
tableSize = 10

Keys:
25 and 35

Calculate:
hash(25) = 25 % 10 = 5
hash(35) = 35 % 10 = 5

Both want index 5.
This is called a collision.

25 -> index 5
35 -> index 5

Problem:
Index 5 already has 25.
Now where should we put 35?
*/
