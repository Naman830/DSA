// What Does In-Place Mean?
// It means:
// Modify the SAME original array without creating another array.

// Approach 1 — Brute Force
// Using a Set (Use another data structure like Set to store unique values.)

function removeDuplicates(nums){
    // Create a Set to store unique values
    let unique = [...new Set(nums)]
    // Traverse the unique array and modify the original array in-place
    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i]
    }
    return unique.length
}

let nums = [1,1,2,2,3];
console.log(removeDuplicates(nums));
console.log(nums);
