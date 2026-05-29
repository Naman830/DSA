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
