// Insertion Sort takes one element at a time and inserts it into its correct position.

/*
1. Pick the current element.
2. Compare it with previous elements.
3. Shift bigger elements to the right.
4. Insert current element at the correct place.
 */

/*
Pseudo Code

insertionSort(arr):
    for i from 1 to n - 1:
        current = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j--

        arr[j + 1] = current

    return arr
*/
