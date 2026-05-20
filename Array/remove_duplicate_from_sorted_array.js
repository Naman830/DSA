// What Does In-Place Mean?
// It means:
// Modify the SAME original array without creating another array.

// Approach 1 — Brute Force
// Using a Set (Use another data structure like Set to store unique values.)
// TC: O(n) and SC: O(n)
function removeDuplicates(nums) {
    // Create a Set to store unique values
    let unique = [...new Set(nums)];
    // Traverse the unique array and modify the original array in-place
    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }
    return unique.length;
}

// Approach 2 - Optimal Solution (Two Pointer)
// one pointer for unique position
// one pointer for traversal
// TC: O(n) and SC: O(1)

function removeDuplicates1(nums) {
    let i = 0; // Pointer for unique poisition
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; //Move the unique position pointer
            nums[i] = nums[j]; // Update the unique position with the new unique value
        }
    }
    return i + 1; // Return the length of the unique array
}

let nums = [1, 1, 2, 2, 3];
console.log(removeDuplicates1(nums));
console.log(nums);
