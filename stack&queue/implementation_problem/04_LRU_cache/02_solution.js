/*
We'll maintain:

HashMap
   ↓
key → Node

Doubly Linked List
LRU ←────────────→ MRU

Use two dummy nodes:
HEAD ⇄ A ⇄ B ⇄ C ⇄ TAIL
 ↑                 ↑
LRU                MRU

This makes insertion/removal much easier.
*/
