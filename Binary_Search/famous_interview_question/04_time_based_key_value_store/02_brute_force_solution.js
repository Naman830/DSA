/*
Approach 1: Brute Force
Store all timestamp-value pairs in a HashMap.

For every get() operation, traverse the entire history and find the largest timestamp that is less than or equal to the requested timestamp.


TC & SC:-

set()	O(1)
get()	O(n)
- Time: get() takes O(n), where n is the number of timestamps for that key.
- Space: O(N), where N is the total number of stored entries.
*/
