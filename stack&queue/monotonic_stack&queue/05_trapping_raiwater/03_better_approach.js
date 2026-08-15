/*
Prefix & Suffix Maximum
Instead of finding the left and right maximum again and again, we can precalculate them.

height:
[4, 2, 0, 3, 2, 5]

leftMax:
[4, 4, 4, 4, 4, 5]

rightMax:
[5, 5, 5, 5, 5, 5]

So we can directly calculate:
water[i] = min(leftMax[i], rightMax[i]) - height[i]
*/
