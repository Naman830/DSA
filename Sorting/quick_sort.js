// Pick one element, place it in its correct position, then sort left side and right side.

/*
Divide the array using a pivot.
Put smaller elements on the left.
Put bigger elements on the right.
Recursively sort left and right parts.

What is Pivot?
Pivot is any element we choose from the array.

What is Partition?
Rearranging the array so that pivot comes to its correct sorted position.
*/

/*
Pseudocode

quickSort(arr, low, high):

    if low < high:
        pivotIndex = partition(arr, low, high)

        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)

Partition:

partition(arr, low, high):

    pivot = arr[high]
    i = low - 1

    for j from low to high - 1:
        if arr[j] < pivot:
            i++
            swap arr[i] and arr[j]

    swap arr[i + 1] and arr[high]

    return i + 1
*/


function quickSort(arr, low = 0, high = arr.length - 1) {
    // Base condition:
    // If low >= high, it means array has 0 or 1 element
    // Single element is already sorted
    if (low < high) {
        // Partition the array and get pivot's correct index
        let pivotIndex = partition(arr, low, high);

        // Sort left part of pivot
        quickSort(arr, low, pivotIndex - 1);

        // Sort right part of pivot
        quickSort(arr, pivotIndex + 1, high);
    }

    return arr;
}

function partition(arr, low, high) {
    // Choosing last element as pivot
    let pivot = arr[high];

    // i tells where the next smaller element should be placed
    let i = low - 1;

    // Traverse from low to high - 1
    for (let j = low; j < high; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++;

            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Put pivot in its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Return pivot's final index
    return i + 1;
}

// Example
let arr = [5, 2, 8, 1, 3];

console.log(quickSort(arr));