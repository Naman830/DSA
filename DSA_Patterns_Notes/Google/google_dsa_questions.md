# 🔵 Google — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Google is where the *hard algorithmic + parsing + grid/graph* problems live. Classics that another
> folder owns are listed at the bottom under **Cross-references** — do them there, don't re-add them here.

## What Google actually tests

Google interviews are **45 minutes, 1–2 problems, whiteboard/Google Doc style**. The bar is not "did
you memorise it" — it's *can you derive an optimal solution out loud and code it cleanly*. Practical
signals from Google loops:

- **Nothing is a one-liner.** Almost every Google problem is a *medium with a twist* or an outright hard.
- **They love ambiguity.** Half the signal is the clarifying questions you ask before you code.
- **Parsing / string simulation** appears far more at Google than anywhere else (Text Justification, calculators, expression evaluation).
- **Grid + graph traversal with a state twist** (keys, obstacles, cost) is the single most common Tier-1 shape.
- **Follow-ups are guaranteed.** "Now make it O(1) space." "Now stream the input." Prepare the follow-up, not just the solution.

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — Google signature problems (do these first)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Text Justification | Hard | String simulation / greedy line packing | https://leetcode.com/problems/text-justification/ | ⬜ |
| 2 | Expression Add Operators | Hard | Backtracking + operator precedence carry | https://leetcode.com/problems/expression-add-operators/ | ⬜ |
| 3 | Longest Increasing Path in a Matrix | Hard | DFS + memo on grid (implicit DAG) | https://leetcode.com/problems/longest-increasing-path-in-a-matrix/ | ⬜ |
| 4 | Word Search II | Hard | Trie + DFS pruning | https://leetcode.com/problems/word-search-ii/ | ⬜ |
| 5 | Basic Calculator II | Medium | Stack / running-term parsing | https://leetcode.com/problems/basic-calculator-ii/ | ⬜ |
| 6 | Decode String | Medium | Stack of (count, string) | https://leetcode.com/problems/decode-string/ | ⬜ |
| 7 | Evaluate Division | Medium | Weighted graph DFS / Union-Find with ratio | https://leetcode.com/problems/evaluate-division/ | ⬜ |
| 8 | My Calendar I | Medium | Ordered intervals / BST booking | https://leetcode.com/problems/my-calendar-i/ | ⬜ |
| 9 | Shortest Path in Binary Matrix | Medium | BFS on grid (8-directional) | https://leetcode.com/problems/shortest-path-in-binary-matrix/ | ⬜ |
| 10 | Unique Paths III | Hard | Backtracking with visited-count constraint | https://leetcode.com/problems/unique-paths-iii/ | ⬜ |
| 11 | Making A Large Island | Hard | Union-Find / island labelling + merge | https://leetcode.com/problems/making-a-large-island/ | ⬜ |
| 12 | Split Array Largest Sum | Hard | Binary search on the answer | https://leetcode.com/problems/split-array-largest-sum/ | ⬜ |
| 13 | Maximum Sum of 3 Non-Overlapping Subarrays | Hard | Prefix sums + best-left/best-right DP | https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/ | ⬜ |
| 14 | Fruit Into Baskets | Medium | Sliding window with ≤K distinct | https://leetcode.com/problems/fruit-into-baskets/ | ⬜ |
| 15 | Count of Smaller Numbers After Self | Hard | BIT / merge sort with index tracking | https://leetcode.com/problems/count-of-smaller-numbers-after-self/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Text Justification** — Greedy: pack as many words as fit (`len + words + 1 <= maxWidth`), then distribute spaces left-to-right with the extra going to the leftmost gaps. Last line and single-word lines are **left-justified** — that special case is what people fail on.
- **2. Expression Add Operators** — Backtrack over every split point; carry `prev` (the last operand) so that on `*` you can do `cur - prev + prev*num`. Skip numbers with leading zeros.
- **3. Longest Increasing Path in a Matrix** — Strictly-increasing edges ⇒ the graph is a DAG ⇒ no cycles ⇒ plain DFS + memo works. `O(mn)`. Mention topological-sort/peeling as the alternative.
- **4. Word Search II** — Build a Trie of the words, DFS the board once. Kill branches the Trie can't extend, and **delete words from the Trie after finding them** so you don't re-report or re-walk.
- **5. Basic Calculator II** — No parentheses ⇒ no recursion needed. Keep a stack; on `+`/`-` push signed number, on `*`/`/` pop-modify-push. Answer = sum of the stack.
- **6. Decode String** — Two stacks (counts and partial strings) or one stack of pairs. On `[` push and reset; on `]` pop and repeat. Interviewer follow-up: nested `3[a2[c]]`.
- **7. Evaluate Division** — Model `a/b = 2.0` as an edge both ways (`a→b` weight 2, `b→a` weight 0.5). Query = DFS multiplying weights. Union-Find with weights is the "senior" answer.
- **8. My Calendar I** — Keep bookings sorted; a new `[s,e)` conflicts iff `s < existing.end && existing.start < e`. Use a balanced BST / sorted array + binary search for `O(log n)`.
- **9. Shortest Path in Binary Matrix** — BFS, never DFS, when the question says *shortest*. 8 directions. Mark visited **when enqueuing**, not when dequeuing, or you'll TLE.
- **10. Unique Paths III** — Count the walkable cells first; a path only counts when `visited == totalWalkable` **and** you're on the end cell. Backtrack by un-marking.
- **11. Making A Large Island** — Label every island with an id and store `id → size`. For each `0`, sum the sizes of the **distinct** neighbouring ids (use a Set) + 1. Handle the all-1s board.
- **12. Split Array Largest Sum** — Binary search `lo = max(nums)`, `hi = sum(nums)`; feasibility check = greedily count how many chunks you need under a cap. This "binary search on answer" template is worth memorising cold.
- **13. Maximum Sum of 3 Non-Overlapping Subarrays** — Sliding-window sums, then `left[i]` = best window index up to `i`, `right[i]` = best from `i`. Fix the middle window and read both sides. Lexicographically smallest ⇒ use `>` not `>=` on the left, `>=` on the right.
- **14. Fruit Into Baskets** — It is literally "longest subarray with at most 2 distinct". Shrink the window while `map.size > 2`. Generalise to K live in the interview — they always ask.
- **15. Count of Smaller Numbers After Self** — Merge sort while carrying original indices, counting how many right-half elements you place before each left element. BIT over compressed values is the shorter code.

---

## Tier 2 — high-frequency core (Google-tagged, appear constantly)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Median of Two Sorted Arrays | Hard | Binary search on partition | https://leetcode.com/problems/median-of-two-sorted-arrays/ | ⬜ |
| 17 | Minimum Window Substring | Hard | Sliding window + need/have counts | https://leetcode.com/problems/minimum-window-substring/ | ⬜ |
| 18 | Longest Consecutive Sequence | Medium | HashSet, start-of-run trick | https://leetcode.com/problems/longest-consecutive-sequence/ | ⬜ |
| 19 | Find Median from Data Stream | Hard | Two heaps | https://leetcode.com/problems/find-median-from-data-stream/ | ⬜ |
| 20 | Insert Interval | Medium | Interval sweep | https://leetcode.com/problems/insert-interval/ | ⬜ |
| 21 | Word Break II | Hard | DFS + memo returning sentence lists | https://leetcode.com/problems/word-break-ii/ | ⬜ |
| 22 | Candy | Hard | Two-pass greedy | https://leetcode.com/problems/candy/ | ⬜ |
| 23 | Jump Game II | Medium | Greedy BFS-levels on an array | https://leetcode.com/problems/jump-game-ii/ | ⬜ |
| 24 | Time Based Key-Value Store | Medium | HashMap + binary search on timestamps | https://leetcode.com/problems/time-based-key-value-store/ | ⬜ |
| 25 | Range Sum Query 2D - Immutable | Medium | 2D prefix sums | https://leetcode.com/problems/range-sum-query-2d-immutable/ | ⬜ |
| 26 | Interval List Intersections | Medium | Two pointers over intervals | https://leetcode.com/problems/interval-list-intersections/ | ⬜ |
| 27 | Redundant Connection | Medium | Union-Find cycle detection | https://leetcode.com/problems/redundant-connection/ | ⬜ |
| 28 | Random Pick with Weight | Medium | Prefix sums + binary search | https://leetcode.com/problems/random-pick-with-weight/ | ⬜ |
| 29 | Snapshot Array | Medium | Versioned per-index history + binary search | https://leetcode.com/problems/snapshot-array/ | ⬜ |
| 30 | Odd Even Jump | Hard | Monotonic stack / TreeMap + DP from the right | https://leetcode.com/problems/odd-even-jump/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Median of Two Sorted Arrays** — Binary search the **smaller** array for a partition where `maxLeftA <= minRightB` and `maxLeftB <= minRightA`. Use `±Infinity` sentinels for the empty sides. Don't try to merge — that's the `O(n+m)` answer they reject.
- **17. Minimum Window Substring** — Classic expand/contract. Track `have`/`need` counts of *satisfied characters*, not raw frequency, so the check is `O(1)`.
- **18. Longest Consecutive Sequence** — Put everything in a Set, then only start counting from `x` where `x-1 ∉ set`. That's what keeps it `O(n)` instead of `O(n log n)`.
- **19. Find Median from Data Stream** — Max-heap for the low half, min-heap for the high half, sizes differ by ≤1. Always push to one and rebalance by moving the top.
- **20. Insert Interval** — Three phases: copy all intervals ending before the new one, merge everything overlapping (`min`/`max`), copy the rest. No sort needed — input is already sorted.
- **21. Word Break II** — Memoize `dfs(start) → list of sentences from here`. Without memo you exponentially re-explode on `"aaaa...b"`. Mention the DP+backtrack alternative.
- **22. Candy** — Left-to-right pass enforcing the left neighbour rule, right-to-left pass taking `max` with the right rule. `O(n)` time, `O(n)` space; there is an `O(1)`-space slope-counting follow-up.
- **23. Jump Game II** — Track `currentEnd` and `farthest`; every time `i == currentEnd`, you've finished a "level" and jumps++. It's BFS layering without a queue.
- **24. Time Based Key-Value Store** — Timestamps arrive strictly increasing ⇒ each key's list is already sorted ⇒ `get` is a binary search for the largest timestamp `<= t`.
- **25. Range Sum Query 2D** — Precompute `pre[i][j]` = sum of the rectangle from origin. Query = `pre[r2][c2] - pre[r1-1][c2] - pre[r2][c1-1] + pre[r1-1][c1-1]`. Pad with a zero row/col to kill the edge cases.
- **26. Interval List Intersections** — Intersection is `[max(starts), min(ends)]`, valid when start ≤ end. Advance whichever interval **ends first**.
- **27. Redundant Connection** — Union-Find; the first edge whose two endpoints are already connected is the answer. Path compression + union by rank in the same breath.
- **28. Random Pick with Weight** — Build prefix sums, roll a uniform value in `[0, total)`, binary search the first prefix strictly greater. State the "each index picked proportional to weight" invariant out loud.
- **29. Snapshot Array** — Don't copy the array per snapshot. Store per index a list of `[snapId, value]` and binary search the largest `snapId <= wanted`.
- **30. Odd Even Jump** — Process from the right; for each index find the next-greater-or-equal and next-smaller-or-equal via a sorted structure or monotonic stack over sorted indices, then DP two booleans (`odd[i]`, `even[i]`).

---

## Tier 3 — hard / follow-up round (Google onsite finishers)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Trapping Rain Water II | Hard | Min-heap boundary flood fill | https://leetcode.com/problems/trapping-rain-water-ii/ | ⬜ |
| 32 | Palindrome Partitioning II | Hard | DP on cuts + palindrome table | https://leetcode.com/problems/palindrome-partitioning-ii/ | ⬜ |
| 33 | Shortest Path to Get All Keys | Hard | BFS with bitmask state | https://leetcode.com/problems/shortest-path-to-get-all-keys/ | ⬜ |
| 34 | Bus Routes | Hard | BFS over routes, not stops | https://leetcode.com/problems/bus-routes/ | ⬜ |
| 35 | Cherry Pickup | Hard | 3D DP / two walkers simultaneously | https://leetcode.com/problems/cherry-pickup/ | ⬜ |
| 36 | Minimum Cost to Hire K Workers | Hard | Sort by ratio + max-heap of quality | https://leetcode.com/problems/minimum-cost-to-hire-k-workers/ | ⬜ |
| 37 | Race Car | Hard | BFS on (position, speed) / DP | https://leetcode.com/problems/race-car/ | ⬜ |
| 38 | Stream of Characters | Hard | Trie of reversed words + rolling buffer | https://leetcode.com/problems/stream-of-characters/ | ⬜ |
| 39 | Frog Jump | Hard | DP with reachable-step sets | https://leetcode.com/problems/frog-jump/ | ⬜ |
| 40 | Number of Ways to Arrive at Destination | Medium | Dijkstra + path counting | https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Trapping Rain Water II** — Push the whole border into a min-heap, always pop the lowest wall, and flood inward: `water += max(0, wallHeight - cellHeight)`, then push the cell with `max(wall, cell)`. The 1D two-pointer trick does **not** generalise.
- **32. Palindrome Partitioning II** — Precompute `isPal[i][j]` in `O(n²)`, then `cut[i] = min(cut[j-1]+1)` over palindromic `j..i`. Expand-around-centre gives the same table with less code.
- **33. Shortest Path to Get All Keys** — State is `(row, col, keyBitmask)`, so a cell can be legally revisited with different keys. BFS over that state space; goal is `mask == (1<<k)-1`.
- **34. Bus Routes** — Build `stop → routes`. BFS where each *level* is "one more bus taken", and mark whole routes visited. Modelling it stop-by-stop is the trap that TLEs.
- **35. Cherry Pickup** — Down-and-back = two people walking down simultaneously. DP on `(step, r1, r2)` since `c = step - r`. If both land on the same cell, count the cherry once.
- **36. Minimum Cost to Hire K Workers** — Sort workers by `wage/quality` ratio. Sweep; keep a max-heap of the K smallest qualities; candidate cost = `ratio * sumOfQualities`.
- **37. Race Car** — BFS over `(pos, speed)` with the two moves (`A`: pos+=speed, speed*=2; `R`: speed = ±1) and a sane bound on positions. The DP version reasons about "overshoot then reverse".
- **38. Stream of Characters** — Insert **reversed** words into a Trie and walk the last characters backwards on each query, so you're matching suffixes of the stream. Cap the buffer at the longest word.
- **39. Frog Jump** — `map[stone] = set of jump sizes that can land here`; from each, try `k-1, k, k+1`. Hash-of-sets keeps it clean.
- **40. Number of Ways to Arrive at Destination** — Run Dijkstra, and when you relax an edge to an equal-distance path, add the path counts (mod 1e9+7); on a strictly better path, overwrite.

---

## 🔗 Cross-references (Google asks these too — solved in another folder)

Google interviewers absolutely still ask these; they're just **owned** by another folder so nothing is duplicated:

| Problem | Owned by |
|---------|----------|
| Number of Islands, Two Sum, Trapping Rain Water, Merge Intervals, LRU Cache, Course Schedule II, Word Ladder | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| Valid Palindrome II, Clone Graph, Binary Tree Maximum Path Sum, Accounts Merge, Serialize and Deserialize Binary Tree, Alien Dictionary | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Edit Distance, Implement Trie, Largest Rectangle in Histogram, N-Queens, Skyline Problem | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| 3Sum, Container With Most Water, First Missing Positive, Decode Ways | [`../Apple/`](../Apple/apple_dsa_questions.md) |

## 📅 Suggested order (3 weeks, ~2 problems/day)

1. **Week 1 — parsing + grids:** 5, 6, 1, 9, 3, 11, 10, 4, 33, 34
2. **Week 2 — windows, intervals, binary search:** 14, 17, 18, 20, 26, 8, 24, 12, 16, 28
3. **Week 3 — DP + hards:** 13, 21, 22, 23, 32, 35, 36, 15, 30, 31

> Rule for Google specifically: after you solve each one, **say the follow-up out loud** — "what if the input is a stream", "what if the grid doesn't fit in memory", "can we do it in O(1) space". That's the part the interviewer is actually scoring.
