/*
You are given an array candidates and a target.
You need to find all unique combinations whose sum equals target.

Important difference from Combination Sum I

In Combination Sum II:
Each number can be used at most once.
The array can contain duplicates.
The answer must contain unique combinations.
*/

/*
The key line is:

if (i > start && candidates[i] === candidates[i - 1]) {
  continue;
}

1. Why i > start?
Suppose: [1,1,2]
At the same recursion level:

         []
        / | \
       1  1  2

The first 1 can create combinations.
The second 1 would create the same combinations.
So we skip the second 1.

But we do not skip it when it's inside a deeper recursion level, because:
[1,1,6]

is a valid combination.

That's exactly why we use:
i > start

rather than simply:
i > 0
*/

/*
| Approach    |     Best |    Average |          Worst |
| ----------- | -------: | ---------: | -------------: |
| Brute Force | `O(2^n)` |   `O(2^n)` |   `O(2^n · n)` |
| Better      | `O(2^n)` |   `O(2^n)` |   `O(2^n · n)` |
| **Optimal** | `O(2^n)` |   `O(2^n)` | **O(2^n · n)** |
| Space       |   `O(n)` | `O(n + K)` |     `O(n + K)` |
*/
