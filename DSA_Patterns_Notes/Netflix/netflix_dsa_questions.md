# 🔴 Netflix — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Netflix owns *scheduling, streaming/heap, and binary-search-on-answer* problems — the shapes that
> match its real engineering. Problems another folder owns are listed under **Cross-references**.

## What Netflix actually tests

Netflix hires **senior-heavy** and interviews differently from the rest of big tech:

- **Fewer, harder rounds.** Often 1 coding screen + a full onsite that is mostly system design, architecture, and culture. The DSA bar is "solid senior", not "competitive programmer".
- **Practical algorithms.** Scheduling, rate limiting, streaming medians, top-K over a feed, binary search on a resource limit — problems that look like real backend work.
- **Culture fit is a real gate.** The "Netflix Culture" memo (freedom & responsibility, candour) is genuinely used to score you. Read it before the loop.
- **They probe *why*, hard.** Expect "what breaks at 10× traffic" after your solution, in the coding round.
- **Code quality is scored like production code.** Naming, testability, and error handling matter more here than in a typical FAANG screen.

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — scheduling, streams & heaps (Netflix's shape)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Car Pooling | Medium | Difference array / event sweep | https://leetcode.com/problems/car-pooling/ | ⬜ |
| 2 | Non-overlapping Intervals | Medium | Greedy by earliest end time | https://leetcode.com/problems/non-overlapping-intervals/ | ⬜ |
| 3 | Minimum Number of Arrows to Burst Balloons | Medium | Greedy interval stabbing | https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/ | ⬜ |
| 4 | Course Schedule III | Hard | Greedy + max-heap swap-out | https://leetcode.com/problems/course-schedule-iii/ | ⬜ |
| 5 | Time Needed to Inform All Employees | Medium | Tree DFS with accumulated time | https://leetcode.com/problems/time-needed-to-inform-all-employees/ | ⬜ |
| 6 | Flood Fill | Easy | DFS/BFS on a grid | https://leetcode.com/problems/flood-fill/ | ⬜ |
| 7 | Kth Largest Element in a Stream | Easy | Size-k min-heap | https://leetcode.com/problems/kth-largest-element-in-a-stream/ | ⬜ |
| 8 | Sliding Window Median | Hard | Two heaps with lazy deletion | https://leetcode.com/problems/sliding-window-median/ | ⬜ |
| 9 | Find K Pairs with Smallest Sums | Medium | Heap over the frontier | https://leetcode.com/problems/find-k-pairs-with-smallest-sums/ | ⬜ |
| 10 | Ugly Number II | Medium | Three-pointer merge DP | https://leetcode.com/problems/ugly-number-ii/ | ⬜ |
| 11 | Number of Recent Calls | Easy | Sliding-window queue (rate limiter) | https://leetcode.com/problems/number-of-recent-calls/ | ⬜ |
| 12 | Design Circular Queue | Medium | Ring buffer with head/count | https://leetcode.com/problems/design-circular-queue/ | ⬜ |
| 13 | Permutation in String | Medium | Fixed-size sliding window of counts | https://leetcode.com/problems/permutation-in-string/ | ⬜ |
| 14 | Find All Anagrams in a String | Medium | Fixed-size window + count match | https://leetcode.com/problems/find-all-anagrams-in-a-string/ | ⬜ |
| 15 | Minimum Size Subarray Sum | Medium | Variable-size shrinking window | https://leetcode.com/problems/minimum-size-subarray-sum/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Car Pooling** — Add `+p` at the start stop and `-p` at the end stop in a 1001-slot array, then prefix-sum and check the capacity. Beats sorting events; say both.
- **2. Non-overlapping Intervals** — Sort by **end**, greedily keep every interval starting at or after the last kept end. Removals = `n - kept`. Sorting by start is the wrong greedy.
- **3. Burst Balloons (arrows)** — Same greedy: sort by end, shoot at that end, skip everything it covers. Use `>` not `>=` because touching endpoints still pop.
- **4. Course Schedule III** — Sort by deadline, take everything greedily, and when the running time exceeds the deadline, pop the **longest** course taken so far from a max-heap. Classic exchange argument.
- **5. Time Needed to Inform All Employees** — Build the manager→reports tree and DFS accumulating `informTime`; the answer is the deepest weighted path. Memoised upward walk also works.
- **6. Flood Fill** — Guard the "new colour equals old colour" infinite-loop case first. Otherwise it's the plain 4-directional fill.
- **7. Kth Largest in a Stream** — Min-heap capped at size `k`; the root *is* the answer. Push then pop when size exceeds `k`.
- **8. Sliding Window Median** — Two heaps (as in Find Median from Data Stream) plus a `delete` map for lazy removal, rebalancing after each slide. Explain lazy deletion — that's the whole question.
- **9. Find K Pairs with Smallest Sums** — Seed the heap with `(nums1[i], nums2[0])` for the first `k` i's; each pop pushes only its own next `j`. Avoids the `n·m` blow-up.
- **10. Ugly Number II** — Keep three indices into the result array for ×2, ×3, ×5; take the min, advance **all** pointers that produced it (dedup).
- **11. Number of Recent Calls** — Queue of timestamps; pop everything older than `t - 3000`. This is literally a fixed-window rate limiter — mention token bucket / sliding log as the production version.
- **12. Design Circular Queue** — Store `head`, `count`, and a fixed array; `tail = (head + count - 1) % size`. Tracking `count` avoids the "full vs empty" ambiguity of head/tail alone.
- **13. Permutation in String** — Fixed window of `len(s1)`; compare 26-length count arrays, or maintain a `matches` counter for `O(1)` checks per slide.
- **14. Find All Anagrams** — Same machinery as #13, but you record every start index. Do them back to back — one template, two problems.
- **15. Minimum Size Subarray Sum** — Expand right, shrink while `sum >= target`, record the length. The `O(n log n)` prefix-sum + binary-search variant is the follow-up for negative-free arrays.

---

## Tier 2 — binary search, greedy & DP

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Binary Search | Easy | Canonical template | https://leetcode.com/problems/binary-search/ | ⬜ |
| 17 | Search a 2D Matrix | Medium | Flattened binary search | https://leetcode.com/problems/search-a-2d-matrix/ | ⬜ |
| 18 | Koko Eating Bananas | Medium | Binary search on the answer | https://leetcode.com/problems/koko-eating-bananas/ | ⬜ |
| 19 | Find First and Last Position of Element in Sorted Array | Medium | Lower/upper bound search | https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ | ⬜ |
| 20 | Search in Rotated Sorted Array II | Medium | Binary search with duplicate handling | https://leetcode.com/problems/search-in-rotated-sorted-array-ii/ | ⬜ |
| 21 | Maximum Product Subarray | Medium | Track min and max simultaneously | https://leetcode.com/problems/maximum-product-subarray/ | ⬜ |
| 22 | Best Time to Buy and Sell Stock II | Medium | Greedy sum of positive deltas | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/ | ⬜ |
| 23 | Gas Station | Medium | Greedy with a reset point | https://leetcode.com/problems/gas-station/ | ⬜ |
| 24 | Jump Game | Medium | Greedy reachability | https://leetcode.com/problems/jump-game/ | ⬜ |
| 25 | Partition Equal Subset Sum | Medium | 0/1 knapsack on booleans | https://leetcode.com/problems/partition-equal-subset-sum/ | ⬜ |
| 26 | Target Sum | Medium | Subset-sum transform / DP over sums | https://leetcode.com/problems/target-sum/ | ⬜ |
| 27 | Perfect Squares | Medium | Unbounded knapsack / BFS on numbers | https://leetcode.com/problems/perfect-squares/ | ⬜ |
| 28 | Russian Doll Envelopes | Hard | Sort + LIS on the second dimension | https://leetcode.com/problems/russian-doll-envelopes/ | ⬜ |
| 29 | Longest Arithmetic Subsequence | Medium | DP with a per-index diff map | https://leetcode.com/problems/longest-arithmetic-subsequence/ | ⬜ |
| 30 | Predict the Winner | Medium | Interval game DP (minimax) | https://leetcode.com/problems/predict-the-winner/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Binary Search** — Own one template: `lo <= hi`, `mid = lo + ((hi - lo) >> 1)`. Every problem below is a re-skin of it; get the off-by-ones automatic.
- **17. Search a 2D Matrix** — Treat it as one sorted array of length `m*n`; `row = idx / n`, `col = idx % n`. (The staircase search from the top-right solves the "sorted rows and columns" variant instead.)
- **18. Koko Eating Bananas** — Search `k` in `[1, max(piles)]`; feasibility is `sum(ceil(pile/k)) <= h`. The archetype of "binary search on the answer" — state the monotonicity explicitly.
- **19. First and Last Position** — Two searches: first index `>= target` and first index `> target`. Write a single `lowerBound` helper and call it twice.
- **20. Search in Rotated Sorted Array II** — Duplicates break the "which half is sorted" test; when `nums[lo] === nums[mid] === nums[hi]`, shrink both ends by one. Worst case degrades to `O(n)` — say it.
- **21. Maximum Product Subarray** — A negative flips min into max, so carry both `curMax` and `curMin` and swap them on a negative element. Zeros reset both to 1.
- **22. Best Time to Buy and Sell Stock II** — Sum every positive `prices[i] - prices[i-1]`. Unlimited transactions makes greedy optimal — justify it in a line.
- **23. Gas Station** — If total gas ≥ total cost a solution exists; scan once and reset the start to `i+1` whenever the running tank goes negative.
- **24. Jump Game** — Track the furthest reachable index; fail the moment `i > reach`. Compare with Jump Game II (Google folder) which counts jumps.
- **25. Partition Equal Subset Sum** — Odd total → false. Otherwise boolean knapsack for `sum/2`, iterating the capacity **downwards** in the 1D version.
- **26. Target Sum** — `P - N = target`, `P + N = sum` ⇒ find subsets summing to `(sum + target) / 2`. Check parity and range before running the DP.
- **27. Perfect Squares** — `dp[i] = 1 + min(dp[i - j*j])`. BFS over "numbers reachable in k squares" is the more intuitive explanation; Lagrange's four-square theorem gives the `O(√n)` party trick.
- **28. Russian Doll Envelopes** — Sort width ascending, **height descending on equal widths** (so same-width envelopes can't chain), then run `O(n log n)` LIS on heights.
- **29. Longest Arithmetic Subsequence** — `dp[i]` is a Map from common-difference to length; `dp[i][d] = (dp[j][d] || 1) + 1`. `O(n²)`.
- **30. Predict the Winner** — `dp[i][j]` = best score difference the current player can force on `nums[i..j]`; answer `>= 0` wins. Same skeleton as Stone Game.

---

## Tier 3 — graphs, heaps & randomised design

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Smallest Range Covering Elements from K Lists | Hard | K-way pointer + min-heap | https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/ | ⬜ |
| 32 | Employee Importance | Medium | DFS/BFS over an id map | https://leetcode.com/problems/employee-importance/ | ⬜ |
| 33 | Cheapest Flights Within K Stops | Medium | Bellman-Ford / BFS with cost & stops | https://leetcode.com/problems/cheapest-flights-within-k-stops/ | ⬜ |
| 34 | Path with Maximum Probability | Medium | Dijkstra with multiplication | https://leetcode.com/problems/path-with-maximum-probability/ | ⬜ |
| 35 | Swim in Rising Water | Hard | Dijkstra / binary search + BFS | https://leetcode.com/problems/swim-in-rising-water/ | ⬜ |
| 36 | Minimum Number of Refueling Stops | Hard | Greedy max-heap of passed stations | https://leetcode.com/problems/minimum-number-of-refueling-stops/ | ⬜ |
| 37 | IPO | Hard | Two heaps: affordable by profit | https://leetcode.com/problems/ipo/ | ⬜ |
| 38 | Maximum Frequency Stack | Hard | Freq map + stack per frequency | https://leetcode.com/problems/maximum-frequency-stack/ | ⬜ |
| 39 | Random Pick with Blacklist | Hard | Remap blacklisted ids into the tail | https://leetcode.com/problems/random-pick-with-blacklist/ | ⬜ |
| 40 | Shuffle an Array | Medium | Fisher-Yates | https://leetcode.com/problems/shuffle-an-array/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Smallest Range Covering K Lists** — Min-heap holding one element per list plus a running max; pop the min, advance that list, update the range. Stop when any list is exhausted.
- **32. Employee Importance** — Build `id → employee` first, then DFS the subordinate ids. Trivial once mapped; the point is noticing the map.
- **33. Cheapest Flights Within K Stops** — Bellman-Ford relaxed exactly `k+1` times using a **copy** of the previous round's distances (otherwise you use more stops than allowed).
- **34. Path with Maximum Probability** — Dijkstra with a max-heap, multiplying probabilities instead of adding weights. Works because probabilities are in `[0,1]` and monotone.
- **35. Swim in Rising Water** — Dijkstra where the path cost is `max(elevation)` along the path, or binary search the time `t` and BFS through cells `<= t`. Both are worth stating.
- **36. Minimum Number of Refueling Stops** — Drive as far as you can; when you run out, retroactively "use" the biggest fuel station you already passed (max-heap). Elegant exchange argument.
- **37. IPO** — Sort projects by capital, push everything affordable into a max-heap by profit, take the top `k` times, re-fill after each purchase.
- **38. Maximum Frequency Stack** — `freq[val]`, `maxFreq`, and `group[f] = stack of values that reached frequency f`. Push adds to `group[freq[val]]`; pop takes from `group[maxFreq]`.
- **39. Random Pick with Blacklist** — Map each blacklisted id below `n - blacklist.length` to an unused id above it, then pick uniformly in the reduced range. `O(1)` per pick.
- **40. Shuffle an Array** — Fisher-Yates from the end, swapping with `rand(0..i)`. Be able to argue uniformity, and keep a copy of the original for `reset()`.

---

## 🔗 Cross-references (Netflix asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| LRU Cache, Top K Frequent Elements, Merge Intervals, Merge k Sorted Lists, Number of Islands, Coin Change, Capacity To Ship Packages Within D Days | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| Find Median from Data Stream, Split Array Largest Sum, Time Based Key-Value Store, Random Pick with Weight | [`../Google/`](../Google/google_dsa_questions.md) |
| Task Scheduler, Course Schedule, Insert Delete GetRandom O(1) | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Longest Increasing Subsequence, LFU Cache, Search in Rotated Sorted Array | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |

## 📅 Suggested order (2 weeks — pair each with a "what breaks at scale?" answer)

1. **Days 1–4 — windows & heaps:** 13, 14, 15, 7, 9, 8, 11, 12, 38, 40
2. **Days 5–8 — binary search & greedy:** 16, 17, 18, 19, 20, 22, 23, 24, 2, 3
3. **Days 9–11 — scheduling & graphs:** 1, 4, 5, 33, 34, 35, 36, 37, 31, 32
4. **Days 12–14 — DP:** 21, 25, 26, 27, 28, 29, 30, 10, 6, 39

> Netflix-specific drill: after every solution, answer out loud — *"what happens when the input is a live stream instead of an array, and what's the memory ceiling?"* That framing is the difference between a mid and a senior rating here.
