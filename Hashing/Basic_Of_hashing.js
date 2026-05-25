/*
DEFINATION OF HASHING

Hashing is a technique where we store data in such a way that we can search, insert, and delete very fast.

Imagine you have a school bag.
Inside the bag, you have many pockets.
Now suppose you want to keep your pencil in one fixed pocket, your eraser in one fixed pocket, and your sharpener in one fixed pocket.

So next time, when you need your pencil, you do not search the whole bag.
You directly go to the pencil pocket.

That is the idea of hashing.
In programming, hashing helps us store and find data very fast.
Usually, searching in an array takes time.

Example:
let arr = [10, 20, 30, 40, 50];

If I ask:
Is 40 present?

You may check:
40 → yes
10 → no
20 → no
30 → no
40 → yes

This takes time.
But hashing allows us to find things almost directly.

We first create a frequency map:
Now if someone asks: How many times does 40 appear?
We directly answer: 2 [This is the power of hashing.]

*/

// ================================================================================
// ================================================================================
// ================================================================================

/* 
What is a Hash Table
A hash table is a data structure that stores data in key-value form.
In JavaScript, Map is a hash table-like structure.

Example:

Key        Value
----------------
"apple"    3
"banana"   5
"mango"    2

Here:

apple  → key
3      → value
*/

// ================================================================================
// ================================================================================
// ================================================================================

// What is a Key?
// A key is the thing by which we identify data.

// What is a Value?
// A value is the data stored against a key.

// Example:

let phoneBook = new Map();

phoneBook.set("Rahul", "9876543210");
phoneBook.set("Aman", "9123456780");

// Rahul → key
// 9876543210 → value
// Here:  If you know the key, you can get the value quickly.

console.log(phoneBook.get("Rahul"));

// ================================================================================
// ================================================================================
// ================================================================================

/* 
What is a Hash Function?
A hash function is a function that converts a key into an index.

Example:
Key: "apple"
Hash function gives index: 4

Then "apple" is stored at index 4 internally.

Simple example:
Suppose we have keys:

10, 20, 30

And our hash table size is 7.
We can use:

hash(key) = key % 7

Now:
10 % 7 = 3
20 % 7 = 6
30 % 7 = 2

So:
10 stored at index 3
20 stored at index 6
30 stored at index 2

This is a simple hash function.
*/