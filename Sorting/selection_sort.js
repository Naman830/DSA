// Selection Sort finds the minimum element from the unsorted part of the array and swaps it with the first element of that unsorted part.

/*
1. Assume current index has minimum value.
2. Search the remaining array.
3. Find actual minimum index.
4. Swap current element with minimum element.
*/

/*
Pseudo Code

selectionSort(arr):
    n = length of arr

    for i from 0 to n - 2:
        minIndex = i

        for j from i + 1 to n - 1:
            if arr[j] < arr[minIndex]:
                minIndex = j

        swap arr[i] and arr[minIndex]

    return arr

*/
