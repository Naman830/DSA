/*
Given:
arr1 (sorted)
arr2 (sorted)

After merging:
All smaller elements should be in arr1
All larger elements should be in arr2

Both arrays must remain sorted.
*/

// 1. Better Solution (Two Pointers + Sort Again)

/*
Compare:
last element of arr1
first element of arr2

If:
arr1[left] > arr2[right]

swap them.

After all swaps:
sort arr1
sort arr2
*/

/*
Pseudocode
left = n-1
right = 0

while left >= 0 and right < m

    if arr1[left] > arr2[right]
        swap
        left--
        right++
    else
        break

sort arr1
sort arr2
*/

// TC: O(n log n + m log m) & SC: O(1)

function mergeArrays(arr1, arr2) {
  let left = arr1.length - 1;
  let right = 0;

  // Swap misplaced elements
  while (left >= 0 && right < arr2.length) {
    if (arr1[left] > arr2[right]) {
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];

      left--;
      right++;
    } else {
      break;
    }
  }

  // Restore sorting
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return [arr1, arr2];
}

// 2. Optimal Solution (Gap Method)
// Pattern: Shell Sort Idea

/*
use gap formula: 
gap = ceil(totalLength/2)

Compare elements that are gap distance apart.

If out of order:
swap

Keep reducing gap.

Eventually:
gap = 1
and everything becomes sorted.
*/

/*
Pseudocode

gap = ceil((n+m)/2)

while gap > 0

    left = 0
    right = left + gap

    while right < n+m

         compare and swap

         left++
         right++

    if gap == 1
         break

    gap = ceil(gap/2)
*/
/*
Time  : O((n+m) log(n+m))
Space : O(1)
*/
function mergeSortedArraysGap(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;

  // Calculate next gap
  const nextGap = (gap) => {
    if (gap <= 1) return 0;
    return Math.ceil(gap / 2);
  };

  let gap = nextGap(n + m);

  while (gap > 0) {
    let left = 0;
    let right = left + gap;

    while (right < n + m) {
      let leftValue, rightValue;

      // Case 1: Both pointers inside arr1
      if (left < n && right < n) {
        if (arr1[left] > arr1[right]) {
          [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
        }
      }

      // Case 2: One pointer in arr1, one in arr2
      else if (left < n && right >= n) {
        if (arr1[left] > arr2[right - n]) {
          [arr1[left], arr2[right - n]] = [arr2[right - n], arr1[left]];
        }
      }

      // Case 3: Both pointers inside arr2
      else {
        if (arr2[left - n] > arr2[right - n]) {
          [arr2[left - n], arr2[right - n]] = [arr2[right - n], arr2[left - n]];
        }
      }

      left++;
      right++;
    }

    gap = nextGap(gap);
  }

  return [arr1, arr2];
}
console.log(mergeSortedArraysGap([1, 4, 8, 10], [2, 3, 9]));
