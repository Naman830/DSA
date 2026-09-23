/*
Suppose we have:

          50
         /  \
        7    2
       / \  / \
      3  5 1   1

At 50:
childSum = 7 + 2 = 9

Since:
50 > 9

we cannot decrease 50 to 9.
So we push 50 into one child:

          50
         /  \
        50   2
       / \  / \
      3  5 1   1

Then recursively fix the left subtree.
Eventually, after processing everything, the values are adjusted so every parent satisfies:

parent = left + right
*/
