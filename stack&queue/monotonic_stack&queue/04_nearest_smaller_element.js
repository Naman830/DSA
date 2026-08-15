/*
The Next Smaller Element (NSE) problem asks us to find, for every element, the first element to its right that is smaller than it.

arr = [4, 8, 5, 2, 25]

Next Smaller: We need to look to the right and find the first smaller element.
4  → 2
8  → 5
5  → 2
2  → -1
25 → -1

Answer = [2, 5, 2, -1, -1] 
*/

// 1. Brute Force
/*
For every element, scan all elements on its right until we find a smaller one.

for every i:
    for every j = i + 1 to n:
        if arr[j] < arr[i]:
            answer[i] = arr[j]
            break
Complexity
Time: O(n²)
Space: O(1) excluding the answer array
*/

// 2. Optimal — Monotonic Stack
// Remove elements from the stack that are greater than or equal to arr[i].
// The remaining stack top is the next smaller element.
// Push arr[i] into the stack.
