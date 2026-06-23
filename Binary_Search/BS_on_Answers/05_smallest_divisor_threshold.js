/*
You are given:
An array nums
A number threshold

Choose a divisor d.
For every element:

Math.ceil(nums[i] / d)
Calculate the sum of all these values.

You need to find the smallest divisor d such that:

sum <= threshold
Example
nums = [1, 2, 5, 9]
threshold = 6

If divisor = 5
ceil(1/5) = 1
ceil(2/5) = 1
ceil(5/5) = 1
ceil(9/5) = 2
sum = 5

Since:
5 <= 6

Divisor 5 works.
Now check smaller divisors:

d = 4
sum = 1+1+2+3 = 7
Not valid.

So answer = 5

Key: You can search the answer bettween 1 to max number in the array 
*/

// 1. Brute Force Solution

/*
Time  : O(max(nums) * n)
Space : O(1)
*/

/*
Pseudocode
maxVal = maximum element

for divisor = 1 to maxVal
    sum = 0

    for every number
        sum += ceil(num/divisor)

    if sum <= threshold
        return divisor
*/
