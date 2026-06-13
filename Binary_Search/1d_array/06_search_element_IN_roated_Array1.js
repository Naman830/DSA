// You are given a sorted array that has been rotated at some pivot, and a target value.
/*
Main Observation
For any mid:

low ----- mid ----- high

Either:
nums[low] <= nums[mid]
means left half is sorted

OR

nums[mid] <= nums[high]
means right half is sorted

One of them must be sorted.
*/

// For interview first you will tell that we do it from linear searcha and then tell we can do it from binary search

/*
Time Complexity: O(log n)
Space Complexity: O(1)
*/

// Solution
function search(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    // Target found
    if (target === arr[mid]) {
      return mid;
    } else if (arr[low] <= arr[mid]) {
      //left half is sorted
      if (target >= arr[low] && target < arr[mid]) {
        //check if target is greater then low and lesses then mid
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //right half is sorted
      //check if target is greater then mid and lesser then high
      if (arr[mid] < target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
