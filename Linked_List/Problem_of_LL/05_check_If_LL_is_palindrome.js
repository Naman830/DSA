/*
1 → 2 → 2 → 1 ✅ Palindrome
1 → 2 → 3 → 4 ❌ Not a palindrome
*/

// 1. Brute Force Approach (Using Extra Space)
/*
Traverse list
↓

Store every value in array
↓

Two pointers

left = 0
right = n-1
↓

Compare

If mismatch
return false

Else
left++
right--
↓

Finished
return true
*/

/*
Time : O(n)
Space : O(n)
*/

// 2. Optimal Approach (O(1) Space)
// Reverse only the second half of the linked list.
/*
Step 1: Find the Middle [Use Slow and Fast Pointer.]
Step 2: Reverse the Second Half
Step 3: Compare Both Halves
Step 4: Restore the list by reversing the second half again. [Some interviewers appreciate this because the original linked list remains unchanged.]
*/
