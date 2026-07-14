/*
EXPLANATION
You are given the head of a linked list and an integer k.
Reverse every group of k nodes.
If the last group contains fewer than k nodes, leave it as it is

Input:
1 → 2 → 3 → 4 → 5
k = 2

Output:
2 → 1 → 4 → 3 → 5

Explanation

(1,2) -> reverse -> (2,1)

(3,4) -> reverse -> (4,3)

(5) -> less than k
don't reverse
*/

/*
Key Observations
Reverse only groups having exactly k nodes.
Remaining nodes (< k) stay unchanged.
Need to reconnect reversed groups.
Linked list must remain connected after every reversal.
*/

// ===========================================================================
// ===========================================================================
// ===========================================================================

/*
Brute Force
Store nodes in an array.
Reverse every k-sized portion.
Rebuild the linked list.

Uses extra space.
*/

// ===========================================================================
// ===========================================================================
// ===========================================================================

// OPTIMAL SOLUTION
// 1. Find k nodes.
// 2. Reverse them.
// 3. Connect previous group with current reversed group.

/*
Before reverse
prevGroup
    |
    V

1 → 2 → 3 → 4 → 5 → 6
^         ^
|         |
curr    kthNode

After reverse
3 → 2 → 1 → 4 → 5 → 6

Reconnect: prevGroup.next = 3
1.next = 4

Move
curr = 4

Repeat.
*/

/*
Pseudocode
dummy -> head

prevGroup = dummy
curr = head

while curr exists

    kth = find kth node

    if kth == null
         break

    nextGroup = kth.next

    disconnect group

    reverse group

    connect previous group

    connect reversed tail with nextGroup

    move prevGroup

    move curr

return dummy.next
*/
