/*
You are given the heads of two singly linked lists.
These two linked lists may merge at some point, forming a Y-shaped structure.
Your task is to return the first common node where both linked lists intersect.

Important: Two nodes are considered intersecting only if they are the exact s1ame node in memory, not because they have the same value.

Example
List A

1 → 2 → 3
          \
           8 → 10 → 12
          /
      5 → 6
List B

Key Observations
Compare node references, not values.
After the intersection, both lists share the exact same nodes.
If no intersection exists, return null.
The linked lists should not be modified.
*/
