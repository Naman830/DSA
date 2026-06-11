// Binary Search is a searching algorithm used on a sorted array.
/*
Imagine you are searching for the word "Monkey" in a dictionary.

Linear Search Approac
Start from page 1 and keep turning pages until you find it.

Page 1 → No
Page 2 → No
...
Very slow


Binary Search Approach
Open the dictionary from the middle.
Suppose middle word is "Lion".
Since "Monkey" comes after "Lion", ignore the left half.
Open the middle of the remaining right half.
Repeat until found.

Every step removes half of the remaining pages.
This is exactly how Binary Search works.

*/

/*
Why Binary Search is Fast

| Elements  | Maximum Checks |
| --------- | -------------- |
| 10        | 4              |
| 100       | 7              |
| 1000      | 10             |
| 1,000,000 | 20             |

Because every iteration removes half the elements.
Time Complexity: O(log n)
*/

// 1. Iterative Binary Search
// Keep shrinking the search space using a loop.
/*
Pseudocode

low = 0
high = n - 1

while low <= high
    mid = (low + high) / 2

    if arr[mid] == target
        return mid

    else if arr[mid] < target
        low = mid + 1

    else
        high = mid - 1

return -1
*/
