// Approach 1 — Brute Force Solution
// Sort the array. -------> largest element will be at last index

function largestElement(arr){

   arr.sort((a,b) => a - b)
   return arr[arr.length - 1]
}

console.log(largestElement([1,2,6,2,6,8,1,1,1]));
