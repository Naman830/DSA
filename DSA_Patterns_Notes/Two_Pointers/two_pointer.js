/*
Two Pointer — Quick Revision Notes
Core Idea

Use 2 index variables instead of nested loops to scan a sorted array/string in O(n) instead of O(n²).

When to Use (Recognize These Signals)

1. Array/string is sorted (or can be sorted)
2. Problem asks for a pair/triplet with a target sum
3. Need to check palindrome
4. Need to remove duplicates in-place
5. Merging two sorted arrays
5. Words like: "pair", "sum equals target", "container", "trapping water"
*/

// ====================================================================================
// ====================================================================================
// ====================================================================================

// Pattern 1: Opposite Ends (Converging)
// Pointers start at both ends, move toward center.

/*
left = 0
right = n-1

while left < right:
    if condition_met(arr[left], arr[right]):
        do something
        left++; right--
    elif need_bigger_sum:
        left++
    else:
        right--
*/

// Used for: Two Sum (sorted array), Palindrome check, Container With Most Water, Trapping Rain Water, Reverse array/string

// ====================================================================================
// ====================================================================================

// Pattern 2: Same Direction (Fast-Slow / Slow catches up)
// Both pointers start at 0, move forward at different rates.

/*
slow = 0
for fast in range(n):
    if condition(arr[fast]):
        arr[slow] = arr[fast]
        slow++
*/

// Used for: Remove duplicates, Move zeroes to end, Partitioning (Dutch national flag), Linked list cycle detection

// ====================================================================================
// ====================================================================================

// Pattern 3: Two Pointers on Two Different Arrays

/*
i = 0, j = 0
while i < len(A) and j < len(B):
    compare A[i], B[j]
    move i or j (or both) accordingly
*/

// Used for: Merge two sorted arrays, Intersection of two arrays

// ====================================================================================
// ====================================================================================

// Decision Checklist (30 sec gut check)

/*
Is it sorted or sortable? → Opposite ends pattern
Am I filtering/compacting in-place? → Fast-slow pattern
Are there two separate sorted inputs? → Two-array pattern
Need a fixed-size window? → That's Sliding Window, not this (common confusion point)
*/
