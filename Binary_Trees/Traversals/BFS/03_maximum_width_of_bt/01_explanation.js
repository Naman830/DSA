/*
1. Explain the question
We need to find the maximum width among all levels of a binary tree.
The important part is that null/missing nodes between two existing nodes are counted.

Example:
             1
           /   \
          3     2
         /       \
        5         9

Level 0:        1                  width = 1
Level 1:      3   2                width = 2
Level 2:     5  X  X  9            width = 4

So the answer is: 4

Even though level 2 contains only 5 and 9, the two missing positions between them count toward the width.
*/

/*
. Key observation
Normal BFS lets us process the tree level by level.
But simply counting queue.length is not enough, because missing positions between nodes matter.

So we give every node a position/index, as if the tree were a complete binary tree.
For a node at index i:

left child  = 2 * i + 1
right child = 2 * i + 2
Then for every level: width = lastIndex - firstIndex + 1

For example:
Indices:
             0
           /   \
          1     2
         /       \
        3         6

Level 2:
index:   3   4   5   6
         5   X   X   9

width = 6 - 3 + 1
      = 4
*/

/*
How we can prevent stack overflow because write now if we do 0 or 1 based index so we are doubling the number what if this segement tree 10 power 5 so it will overflow so for preventing this stack overflow 0 → 2 → 6 → 14 → 30 → 62 → 126 → ... we use this:-

So at the beginning of every level, we normalize the indices.

const minIndex = queue[0][1];
const currentIndex = index - minIndex;

Think of it as resetting each level's indexing close to 0.

For example, instead of:

Actual indices:
100000     100001     100002     100003
   A          B           C          D

we convert them to:
Normalized:
   0           1           2           3
   A           B           C           D

The width does not change:
Before:
100003 - 100000 + 1 = 4

After:
3 - 0 + 1 = 4

So the key intuition to remember is:

We don't care about the actual index values. We only care about the distance between the first and last node. Therefore, subtract the first index at every level to keep indices small and prevent overflow.
*/
