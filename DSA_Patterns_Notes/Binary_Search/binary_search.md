# Binary Search Questions

Extracted from `DSA_Patterns_Notes`: **34 questions**.

Includes questions whose source row or question-specific notes identify binary search, lower/upper bounds, or a binary-search alternative. Binary search tree questions are excluded unless they use the binary search algorithm.

The source files contain titles, metadata, links, and question-specific notes rather than full standalone problem statements, examples, or constraints. All available source rows and question-specific notes are reproduced below. Follow the problem links for full statements. Source wording is preserved, including any caveats or inaccuracies.

## Question Checklist

| # | Question | Difficulty | Source | Status |
|---|----------|------------|--------|--------|
| 1 | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | Easy | [Adobe #5](../Adobe/adobe_dsa_questions.md) | ⬜ |
| 2 | [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | Medium | [Adobe #16](../Adobe/adobe_dsa_questions.md) | ⬜ |
| 3 | [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) | Medium | [Adobe #17](../Adobe/adobe_dsa_questions.md) | ⬜ |
| 4 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | Medium | [Amazon #27](../Amazon/amazon_oa_best_dsa_questions.md) | ⬜ |
| 5 | [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) | Medium | [Amazon #31](../Amazon/amazon_oa_best_dsa_questions.md) | ⬜ |
| 6 | [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) | Medium | [Atlassian #19](../Atlassian/atlassian_dsa_questions.md) | ⬜ |
| 7 | [My Calendar I](https://leetcode.com/problems/my-calendar-i/) | Medium | [Google #8](../Google/google_dsa_questions.md) | ⬜ |
| 8 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | Hard | [Google #12](../Google/google_dsa_questions.md) | ⬜ |
| 9 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | [Google #16](../Google/google_dsa_questions.md) | ⬜ |
| 10 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Medium | [Google #24](../Google/google_dsa_questions.md) | ⬜ |
| 11 | [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) | Medium | [Google #28](../Google/google_dsa_questions.md) | ⬜ |
| 12 | [Snapshot Array](https://leetcode.com/problems/snapshot-array/) | Medium | [Google #29](../Google/google_dsa_questions.md) | ⬜ |
| 13 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | Medium | [Meta #27](../Meta/meta_dsa_questions.md) | ⬜ |
| 14 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | [Microsoft #22](../Microsoft/microsoft_dsa_questions.md) | ⬜ |
| 15 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | [Microsoft #23](../Microsoft/microsoft_dsa_questions.md) | ⬜ |
| 16 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) | Medium | [Microsoft #30](../Microsoft/microsoft_dsa_questions.md) | ⬜ |
| 17 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | [Microsoft #37](../Microsoft/microsoft_dsa_questions.md) | ⬜ |
| 18 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | Medium | [Netflix #15](../Netflix/netflix_dsa_questions.md) | ⬜ |
| 19 | [Binary Search](https://leetcode.com/problems/binary-search/) | Easy | [Netflix #16](../Netflix/netflix_dsa_questions.md) | ⬜ |
| 20 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | [Netflix #17](../Netflix/netflix_dsa_questions.md) | ⬜ |
| 21 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Medium | [Netflix #18](../Netflix/netflix_dsa_questions.md) | ⬜ |
| 22 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Medium | [Netflix #19](../Netflix/netflix_dsa_questions.md) | ⬜ |
| 23 | [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | Medium | [Netflix #20](../Netflix/netflix_dsa_questions.md) | ⬜ |
| 24 | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | Hard | [Netflix #35](../Netflix/netflix_dsa_questions.md) | ⬜ |
| 25 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | [Salesforce #3](../Salesforce/salesforce_dsa_questions.md) | ⬜ |
| 26 | [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) | Easy | [Salesforce #29](../Salesforce/salesforce_dsa_questions.md) | ⬜ |
| 27 | [Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/) | Hard | [Salesforce #31](../Salesforce/salesforce_dsa_questions.md) | ⬜ |
| 28 | [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) | Medium | [Salesforce #32](../Salesforce/salesforce_dsa_questions.md) | ⬜ |
| 29 | [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | Medium | [Salesforce #33](../Salesforce/salesforce_dsa_questions.md) | ⬜ |
| 30 | [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | Medium | [Salesforce #34](../Salesforce/salesforce_dsa_questions.md) | ⬜ |
| 31 | [Random Point in Non-overlapping Rectangles](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/) | Medium | [Uber #10](../Uber/uber_dsa_questions.md) | ⬜ |
| 32 | [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/) | Hard | [Uber #31](../Uber/uber_dsa_questions.md) | ⬜ |
| 33 | [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | Hard | [Uber #32](../Uber/uber_dsa_questions.md) | ⬜ |
| 34 | [Range Module](https://leetcode.com/problems/range-module/) | Hard | [Uber #38](../Uber/uber_dsa_questions.md) | ⬜ |

## Available Question Text

### 1. Sqrt(x)

Source: [Adobe — question 5](../Adobe/adobe_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 5 | Sqrt(x) | Easy | Binary search / Newton's method | https://leetcode.com/problems/sqrtx/ | ⬜ |

- **5. Sqrt(x)** — Binary search on `[0, x]` with `mid*mid <= x`, returning `hi`. Watch overflow — compare with `mid <= x / mid` in fixed-width languages.

### 2. Kth Smallest Element in a Sorted Matrix

Source: [Adobe — question 16](../Adobe/adobe_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Kth Smallest Element in a Sorted Matrix | Medium | Heap / binary search on value | https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/ | ⬜ |

- **16. Kth Smallest in a Sorted Matrix** — Min-heap seeded with the first column (`O(k log n)`), or binary search the value range counting elements ≤ mid with a staircase walk (`O(n log range)`). Offer both.

### 3. Find K Closest Elements

Source: [Adobe — question 17](../Adobe/adobe_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 17 | Find K Closest Elements | Medium | Binary search the window start | https://leetcode.com/problems/find-k-closest-elements/ | ⬜ |

- **17. Find K Closest Elements** — Binary search the left edge of the window over `[0, n-k]` comparing `x - arr[mid]` with `arr[mid+k] - x`. Beats the two-pointer shrink for large `n`.

### 4. Capacity To Ship Packages Within D Days

Source: [Amazon — question 27](../Amazon/amazon_oa_best_dsa_questions.md)

| # | Problem | Amazon OA Name | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|-----------------|------------|---------|----------------|--------|
| 27 | Capacity To Ship Packages Within D Days | Warehouse Shipment Allocation | Medium | Binary Search on Answer | https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/ | ⬜ |

- **27. Capacity To Ship Packages Within D Days** — Binary search capacity in `[max(weights), sum(weights)]`; feasibility = greedy day counting. Same template as Split Array Largest Sum.

### 5. Search Suggestions System

Source: [Amazon — question 31](../Amazon/amazon_oa_best_dsa_questions.md)

| # | Problem | Amazon OA Name | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|-----------------|------------|---------|----------------|--------|
| 31 | Search Suggestions System | Product Suggestions | Medium | Trie / sorted + binary search | https://leetcode.com/problems/search-suggestions-system/ | ⬜ |

- **31. Search Suggestions System** — Sort the products and binary search the prefix range, keeping the first 3 — simpler and faster to write than a Trie under a timer. Mention the Trie version for repeated queries.

### 6. Path With Minimum Effort

Source: [Atlassian — question 19](../Atlassian/atlassian_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 19 | Path With Minimum Effort | Medium | Dijkstra on max-edge / binary search + BFS | https://leetcode.com/problems/path-with-minimum-effort/ | ⬜ |

- **19. Path With Minimum Effort** — Dijkstra where a path's cost is the **max** edge on it, or binary search the threshold and BFS through allowed edges. Recognise the "minimise the maximum" family.

### 7. My Calendar I

Source: [Google — question 8](../Google/google_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 8 | My Calendar I | Medium | Ordered intervals / BST booking | https://leetcode.com/problems/my-calendar-i/ | ⬜ |

- **8. My Calendar I** — Keep bookings sorted; a new `[s,e)` conflicts iff `s < existing.end && existing.start < e`. Use a balanced BST / sorted array + binary search for `O(log n)`.

### 8. Split Array Largest Sum

Source: [Google — question 12](../Google/google_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 12 | Split Array Largest Sum | Hard | Binary search on the answer | https://leetcode.com/problems/split-array-largest-sum/ | ⬜ |

- **12. Split Array Largest Sum** — Binary search `lo = max(nums)`, `hi = sum(nums)`; feasibility check = greedily count how many chunks you need under a cap. This "binary search on answer" template is worth memorising cold.

### 9. Median of Two Sorted Arrays

Source: [Google — question 16](../Google/google_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Median of Two Sorted Arrays | Hard | Binary search on partition | https://leetcode.com/problems/median-of-two-sorted-arrays/ | ⬜ |

- **16. Median of Two Sorted Arrays** — Binary search the **smaller** array for a partition where `maxLeftA <= minRightB` and `maxLeftB <= minRightA`. Use `±Infinity` sentinels for the empty sides. Don't try to merge — that's the `O(n+m)` answer they reject.

### 10. Time Based Key-Value Store

Source: [Google — question 24](../Google/google_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 24 | Time Based Key-Value Store | Medium | HashMap + binary search on timestamps | https://leetcode.com/problems/time-based-key-value-store/ | ⬜ |

- **24. Time Based Key-Value Store** — Timestamps arrive strictly increasing ⇒ each key's list is already sorted ⇒ `get` is a binary search for the largest timestamp `<= t`.

### 11. Random Pick with Weight

Source: [Google — question 28](../Google/google_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 28 | Random Pick with Weight | Medium | Prefix sums + binary search | https://leetcode.com/problems/random-pick-with-weight/ | ⬜ |

- **28. Random Pick with Weight** — Build prefix sums, roll a uniform value in `[0, total)`, binary search the first prefix strictly greater. State the "each index picked proportional to weight" invariant out loud.

### 12. Snapshot Array

Source: [Google — question 29](../Google/google_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 29 | Snapshot Array | Medium | Versioned per-index history + binary search | https://leetcode.com/problems/snapshot-array/ | ⬜ |

- **29. Snapshot Array** — Don't copy the array per snapshot. Store per index a list of `[snapId, value]` and binary search the largest `snapId <= wanted`.

### 13. Find Peak Element

Source: [Meta — question 27](../Meta/meta_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 27 | Find Peak Element | Medium | Binary search on slope | https://leetcode.com/problems/find-peak-element/ | ⬜ |

- **27. Find Peak Element** — If `nums[mid] < nums[mid+1]` a peak exists to the right, else at `mid` or left. Works because the boundaries act as `-∞`.

### 14. Search in Rotated Sorted Array

Source: [Microsoft — question 22](../Microsoft/microsoft_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 22 | Search in Rotated Sorted Array | Medium | Binary search on the sorted half | https://leetcode.com/problems/search-in-rotated-sorted-array/ | ⬜ |

- **22. Search in Rotated Sorted Array** — One half is always sorted: figure out which by comparing `nums[lo] <= nums[mid]`, then test whether the target lies inside that half.

### 15. Find Minimum in Rotated Sorted Array

Source: [Microsoft — question 23](../Microsoft/microsoft_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 23 | Find Minimum in Rotated Sorted Array | Medium | Binary search against the right end | https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/ | ⬜ |

- **23. Find Minimum in Rotated Sorted Array** — Compare `nums[mid]` with `nums[hi]` (not `lo`); if greater, the min is right of mid. Duplicates version needs `hi--` as the fallback.

### 16. Find the Duplicate Number

Source: [Microsoft — question 30](../Microsoft/microsoft_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 30 | Find the Duplicate Number | Medium | Cycle detection on values-as-pointers | https://leetcode.com/problems/find-the-duplicate-number/ | ⬜ |

- **30. Find the Duplicate Number** — Read-only + `O(1)` space ⇒ treat `nums[i]` as a next-pointer and run Floyd's. Binary search on the value range (counting elements ≤ mid) is the other accepted answer.

### 17. Longest Increasing Subsequence

Source: [Microsoft — question 37](../Microsoft/microsoft_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 37 | Longest Increasing Subsequence | Medium | Patience sorting / DP + binary search | https://leetcode.com/problems/longest-increasing-subsequence/ | ⬜ |

- **37. Longest Increasing Subsequence** — `O(n²)` DP first, then the `O(n log n)` tails-array version (binary search for the first tail ≥ x and replace). Tails array is **not** the LIS itself — say that.

### 18. Minimum Size Subarray Sum

Source: [Netflix — question 15](../Netflix/netflix_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 15 | Minimum Size Subarray Sum | Medium | Variable-size shrinking window | https://leetcode.com/problems/minimum-size-subarray-sum/ | ⬜ |

- **15. Minimum Size Subarray Sum** — Expand right, shrink while `sum >= target`, record the length. The `O(n log n)` prefix-sum + binary-search variant is the follow-up for negative-free arrays.

### 19. Binary Search

Source: [Netflix — question 16](../Netflix/netflix_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Binary Search | Easy | Canonical template | https://leetcode.com/problems/binary-search/ | ⬜ |

- **16. Binary Search** — Own one template: `lo <= hi`, `mid = lo + ((hi - lo) >> 1)`. Every problem below is a re-skin of it; get the off-by-ones automatic.

### 20. Search a 2D Matrix

Source: [Netflix — question 17](../Netflix/netflix_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 17 | Search a 2D Matrix | Medium | Flattened binary search | https://leetcode.com/problems/search-a-2d-matrix/ | ⬜ |

- **17. Search a 2D Matrix** — Treat it as one sorted array of length `m*n`; `row = idx / n`, `col = idx % n`. (The staircase search from the top-right solves the "sorted rows and columns" variant instead.)

### 21. Koko Eating Bananas

Source: [Netflix — question 18](../Netflix/netflix_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 18 | Koko Eating Bananas | Medium | Binary search on the answer | https://leetcode.com/problems/koko-eating-bananas/ | ⬜ |

- **18. Koko Eating Bananas** — Search `k` in `[1, max(piles)]`; feasibility is `sum(ceil(pile/k)) <= h`. The archetype of "binary search on the answer" — state the monotonicity explicitly.

### 22. Find First and Last Position of Element in Sorted Array

Source: [Netflix — question 19](../Netflix/netflix_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 19 | Find First and Last Position of Element in Sorted Array | Medium | Lower/upper bound search | https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ | ⬜ |

- **19. First and Last Position** — Two searches: first index `>= target` and first index `> target`. Write a single `lowerBound` helper and call it twice.

### 23. Search in Rotated Sorted Array II

Source: [Netflix — question 20](../Netflix/netflix_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 20 | Search in Rotated Sorted Array II | Medium | Binary search with duplicate handling | https://leetcode.com/problems/search-in-rotated-sorted-array-ii/ | ⬜ |

- **20. Search in Rotated Sorted Array II** — Duplicates break the "which half is sorted" test; when `nums[lo] === nums[mid] === nums[hi]`, shrink both ends by one. Worst case degrades to `O(n)` — say it.

### 24. Swim in Rising Water

Source: [Netflix — question 35](../Netflix/netflix_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 35 | Swim in Rising Water | Hard | Dijkstra / binary search + BFS | https://leetcode.com/problems/swim-in-rising-water/ | ⬜ |

- **35. Swim in Rising Water** — Dijkstra where the path cost is `max(elevation)` along the path, or binary search the time `t` and BFS through cells `<= t`. Both are worth stating.

### 25. Two Sum II - Input Array Is Sorted

Source: [Salesforce — question 3](../Salesforce/salesforce_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 3 | Two Sum II - Input Array Is Sorted | Medium | Two pointers on a sorted array | https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ | ⬜ |

- **3. Two Sum II** — Sorted input ⇒ two pointers, `O(1)` space, 1-indexed output. Say why binary search per element (`O(n log n)`) is worse.

### 26. Kth Missing Positive Number

Source: [Salesforce — question 29](../Salesforce/salesforce_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 29 | Kth Missing Positive Number | Easy | Binary search on missing count | https://leetcode.com/problems/kth-missing-positive-number/ | ⬜ |

- **29. Kth Missing Positive Number** — At index `i`, the count of missing numbers is `arr[i] - (i + 1)`; binary search the first index where that exceeds `k`, answer `lo + k`.

### 27. Kth Smallest Number in Multiplication Table

Source: [Salesforce — question 31](../Salesforce/salesforce_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Kth Smallest Number in Multiplication Table | Hard | Binary search on value + counting | https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/ | ⬜ |

- **31. Kth Smallest in Multiplication Table** — Binary search the value; count entries ≤ `mid` as `Σ min(mid / i, n)` per row. The count function is the whole problem.

### 28. Magnetic Force Between Two Balls

Source: [Salesforce — question 32](../Salesforce/salesforce_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 32 | Magnetic Force Between Two Balls | Medium | Binary search on the minimum gap | https://leetcode.com/problems/magnetic-force-between-two-balls/ | ⬜ |

- **32. Magnetic Force Between Two Balls** — Sort positions, binary search the answer gap, greedily place balls at least `gap` apart and check you placed `m`. Classic "maximise the minimum".

### 29. Minimum Number of Days to Make m Bouquets

Source: [Salesforce — question 33](../Salesforce/salesforce_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 33 | Minimum Number of Days to Make m Bouquets | Medium | Binary search on days + greedy check | https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/ | ⬜ |

- **33. Minimum Days to Make m Bouquets** — Binary search days; the check scans for `k` consecutive bloomed flowers. Reject immediately if `m * k > n`.

### 30. Find the Smallest Divisor Given a Threshold

Source: [Salesforce — question 34](../Salesforce/salesforce_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 34 | Find the Smallest Divisor Given a Threshold | Medium | Binary search on the divisor | https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/ | ⬜ |

- **34. Smallest Divisor Given a Threshold** — Binary search `[1, max(nums)]`; the check is `Σ ceil(num / d) <= threshold`. Same skeleton as Koko (Netflix folder) — recognise the family instantly.

### 31. Random Point in Non-overlapping Rectangles

Source: [Uber — question 10](../Uber/uber_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 10 | Random Point in Non-overlapping Rectangles | Medium | Weighted prefix sums + binary search | https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/ | ⬜ |

- **10. Random Point in Non-overlapping Rectangles** — Weight each rectangle by its **point count** (`(x2-x1+1)*(y2-y1+1)`), prefix-sum, binary search a random roll, then pick uniformly inside that rectangle.

### 32. Longest Duplicate Substring

Source: [Uber — question 31](../Uber/uber_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Longest Duplicate Substring | Hard | Binary search on length + Rabin-Karp | https://leetcode.com/problems/longest-duplicate-substring/ | ⬜ |

- **31. Longest Duplicate Substring** — The answer is monotone: if a duplicate of length `L` exists, one of length `L-1` does too. Binary search `L`, and use a rolling hash (Rabin-Karp) with a big modulus to test each length in `O(n)`.

### 33. Maximum Profit in Job Scheduling

Source: [Uber — question 32](../Uber/uber_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 32 | Maximum Profit in Job Scheduling | Hard | Sort by end + DP with binary search | https://leetcode.com/problems/maximum-profit-in-job-scheduling/ | ⬜ |

- **32. Maximum Profit in Job Scheduling** — Sort by end time; `dp[i] = max(dp[i-1], profit + dp[binarySearch(lastNonConflicting)])`. Weighted interval scheduling — name it.

### 34. Range Module

Source: [Uber — question 38](../Uber/uber_dsa_questions.md)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 38 | Range Module | Hard | Sorted interval list / segment tree | https://leetcode.com/problems/range-module/ | ⬜ |

- **38. Range Module** — Maintain disjoint sorted intervals; `addRange` merges everything overlapping, `removeRange` splits, `queryRange` binary searches for a covering interval. Handle touching endpoints deliberately.
