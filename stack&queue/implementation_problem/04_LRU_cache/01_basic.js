/*
=============================================================================
Meaning
=============================================================================
LRU = Least Recently Used

An LRU Cache is a cache that has a fixed capacity. When the cache becomes full and we need to insert something new, we remove the item that has not been used for the longest time.
*/

/*
=============================================================================
Simple Example
=============================================================================
Suppose our cache capacity is 3:

Cache:
[ A, B, C ]
  ↑       ↑
LRU      MRU

A = least recently used
C = most recently used

Now we access A:
Before: [ A, B, C ]

Access A

After:
[ B, C, A ]
         ↑
        MRU

A becomes recently used, so it moves to the MRU position.

=============================================================================
Now cache is full
=============================================================================
Suppose: [ B, C, A ]

We insert D.
Who should be removed?

B ← least recently used

So:
[ B, C, A ]
    ↓
remove B

[ C, A, D ]

That's the core idea of LRU.
*/

/*
=============================================================================
=============================================================================
What operations do we need?
=============================================================================
=============================================================================
*/

/*
1. get(key) ---> get(A)
If A exists → return its value
Mark A as recently used
If it doesn't exist → return -1

2. put(key, value) ---> put(A, 10)
Add/update A
Mark it as recently used
If cache exceeds capacity → remove the least recently used item
*/

/*
=============================================================================
=============================================================================
The important part: Why HashMap + Doubly Linked List?
=============================================================================
=============================================================================

For the optimal O(1) solution, we use:
HashMap + Doubly Linked List

They Provide US:-
i. HashMap: key → node [So we can find any key in O(1).]

ii. Doubly Linked List -> Maintains the usage order:

LRU                         MRU
 ↓                           ↓
[ A ] ⇄ [ B ] ⇄ [ C ] ⇄ [ D ]
 */
