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
