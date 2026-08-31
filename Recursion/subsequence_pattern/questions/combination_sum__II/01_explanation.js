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
| Approach    |     Best |    Average |          Worst |
| ----------- | -------: | ---------: | -------------: |
| Brute Force | `O(2^n)` |   `O(2^n)` |   `O(2^n · n)` |
| Better      | `O(2^n)` |   `O(2^n)` |   `O(2^n · n)` |
| **Optimal** | `O(2^n)` |   `O(2^n)` | **O(2^n · n)** |
| Space       |   `O(n)` | `O(n + K)` |     `O(n + K)` |
*/
