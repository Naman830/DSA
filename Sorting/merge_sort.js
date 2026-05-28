// Merge Sort is a sorting algorithm used to arrange elements in increasing or decreasing order.

// Main idea: Divide the array into smaller parts, sort those parts, then merge them back.

/*
1. Divide
Break the big problem into smaller problems.

2. Conquer
Solve the smaller problems.

3. Combine
Join the solved parts to get the final answer.
*/



/*
Pseudocode

mergeSort(array):
    if array has 0 or 1 element:
        return array

    find middle index

    leftHalf = mergeSort(left part)
    rightHalf = mergeSort(right part)

    return merge(leftHalf, rightHalf)


merge(left, right):
    create empty result array

    while both left and right have elements:
        compare first elements
        push smaller one into result

    add remaining elements from left
    add remaining elements from right

    return result
*/