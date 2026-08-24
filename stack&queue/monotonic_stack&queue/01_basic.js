/*
The Big Picture
                 MONOTONIC
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
   Monotonic Stack        Monotonic Queue
          │                     │
          ↓                     ↓
 Next Greater Element    Sliding Window
 Next Smaller Element    Maximum / Minimum
 Stock Span
 Daily Temperatures

Monotonic = maintain order
Monotonic Stack = maintain order using a stack
Next Greater Element = usually use a monotonic decreasing stack 

stack[stack.length - 1]  →  2        // index
nums[stack[stack.length - 1]] → 30   // value
*/

/*
Monotonic simply means:
Something keeps moving in one direction — increasing or decreasing — without breaking the order.

=================================================================================
What is a Monotonic Stack?
=================================================================================

A monotonic stack is just a normal stack with one extra rule:
| Type                       | Stack order   |
| -------------------------- | ------------- |
| Monotonic Increasing Stack | Small → Large |
| Monotonic Decreasing Stack | Large → Small |

=================================================================================
What is a Monotonic Queue?
=================================================================================

A monotonic queue maintains elements in either:
Increasing order or Decreasing order

It's especially useful for problems involving:
Sliding Window Maximum
Sliding Window Minimum
*/

/*
=================================================================================
Monotonic time Complexity
=================================================================================
Why is it O(N), not O(N²)
This is the most important benefit of the monotonic stack.
You might think:


for (let i = 0; i < array.length; i++) {
    while () {
 
    }
}

"There is a while loop inside a for loop, so isn't it O(N²)?"

No.

Every element is:
Pushed → once
Popped → at most once

So across the entire algorithm:

N pushes
+
N pops
=
2N operations

Therefore:
Time = O(N)
Space = O(N)
*/
