// This is a very famous DSA problem, also known as:
// Sort Colors || Dutch National Flag Algorithm

// 1. Brute Force Solution
// Just sort the array using built-in sort. (Like: Merge Sort)
// TC: O(n log n) and SC: O(1) [Because we are sorting in same array]

// 2. Better Solution: Counting Method
// Since the array contains only 0, 1, and 2, we can count how many 0s, 1s, and 2s are present.

//TC: O(2N) remove constant O(n) & SC: O(1)

/*
PSEUDO_CODE

count0 = 0
count1 = 0
count2 = 0

for each element in array:
    if element == 0:
        count0++
    else if element == 1:
        count1++
    else:
        count2++

index = 0

while count0 > 0:
    arr[index] = 0
    index++
    count0--

while count1 > 0:
    arr[index] = 1
    index++
    count1--

while count2 > 0:
    arr[index] = 2
    index++
    count2--

return arr
*/

function sort012(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  // Step 1: Count number of 0s, 1s and 2s
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }

  // Step 2: Rewrite the array
  let index = 0;

  // Fill 0s
  while (count0 > 0) {
    arr[index] = 0;
    index++;
    count0--;
  }

  // Fill 1s
  while (count1 > 0) {
    arr[index] = 1;
    index++;
    count1--;
  }

  // Fill 2s
  while (count2 > 0) {
    arr[index] = 2;
    index++;
    count2--;
  }

  return arr;
}

console.log(sort012([2, 0, 2, 1, 1, 0]));

// Optimal Solution: Dutch National Flag Algorithm

/*
We use three pointers: low mid high

0 to low - 1        => all 0s (sorted)
low to mid - 1      => all 1s (sorted)
mid to high         => unknown area (unsorted)
high + 1 to n - 1   => all 2s (sorted)
*/

/*
PSEUDO_CODE

low = 0
mid = 0
high = n - 1

while mid <= high:
    if arr[mid] == 0:
        swap arr[low] and arr[mid]
        low++
        mid++

    else if arr[mid] == 1:
        mid++

    else:
        swap arr[mid] and arr[high]
        high--

return arr
*/



function sort012Dutch(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  // This loop will run until all unknown elements are checked
  while (mid <= high) {
    // Case 1: arr[mid] is 0
    // 0 should be placed on the left side
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid]
      [arr[low], arr[mid]] = [arr[mid], arr[low]];

      // Move both low and mid forward
      low++;
      mid++;
    }

    // Case 2: arr[mid] is 1
    // 1 is already in the correct middle area
    else if (arr[mid] === 1) {
      mid++;
    }

    // Case 3: arr[mid] is 2
    // 2 should be placed on the right side
    else {
      // Swap arr[mid] and arr[high]
      [arr[mid], arr[high]] = [arr[high], arr[mid]];

      // Reduce high because 2 is placed correctly
      high--;

      // Important:
      // Do not increment mid here,
      // because the swapped element from high is still unknown.
    }
  }

  return arr;
}

console.log(sort012Dutch([2, 0, 2, 1, 1, 0]));