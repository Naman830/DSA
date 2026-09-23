/*
In normal level-order traversal, we visit each level from left → right:

        1
       / \
      2   3
     / \ / \
    4  5 6  7

Normal:
[1]
[2, 3]
[4, 5, 6, 7]

In Zig-Zag traversal, the direction changes at every level:
Level 1 → left to right
Level 2 → right to left
Level 3 → left to right
Level 4 → right to left

So the answer becomes:
[
  [1],
  [3, 2],
  [4, 5, 6, 7]
]
*/
