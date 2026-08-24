/*
Capacity = 3
After:

put(1, 10)
put(2, 20)
put(3, 30)
HashMap

1 ─────┐
2 ─────┼──→ Nodes
3 ─────┘

==============================================================================================
Linked List
==============================================================================================

HEAD
 ↓
[1] ⇄ [2] ⇄ [3]
              ↑
             MRU
 ↑
LRU

Now:

get(1)
1 was used → move it to the end.

HEAD
 ↓
[2] ⇄ [3] ⇄ [1]
              ↑
             MRU
 ↑
LRU

Now:
put(4, 40)

Cache is full.
Remove LRU:
[2]  ← REMOVE

Result:
HEAD
 ↓
[3] ⇄ [1] ⇄ [4]
              ↑
             MRU

==============================================================================================
That's the entire LRU Cache idea:
Map gives O(1) lookup + Doubly Linked List gives O(1) removal and insertion.
==============================================================================================

Complexity
Operation	Best	Average	Worst
get()	O(1)	O(1)	O(1)
put()	O(1)	O(1)	O(1)

Space: O(capacity)

The key pattern to remember for interviews is:

        LRU CACHE
           │
     ┌─────┴─────┐
     ↓           ↓
   HashMap    Doubly LL
     │           │
  Find O(1)   Move O(1)

This is the standard O(1) LRU Cache design.

*/
