/*
1. Brute Force

For every bar:
i. Take its height.
ii. Expand left until you find a smaller bar.
iii. Expand right until you find a smaller bar.
iv. Calculate the area.

This checks many bars repeatedly.
Time: O(n²)
Space: O(1)
*/

/*
2. Better Approach

For every bar, separately calculate:
i. Previous Smaller Element
ii. Next Smaller Element

Then:
width = nextSmaller - previousSmaller - 1
area = height × width

This takes O(n) space and O(n) time.
*/
