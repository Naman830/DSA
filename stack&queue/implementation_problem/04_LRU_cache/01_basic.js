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
