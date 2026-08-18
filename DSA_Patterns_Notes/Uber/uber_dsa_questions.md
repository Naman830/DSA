# ⚫ Uber — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Uber owns *simulation, geo/graph routing, string parsing and stateful design* — the shapes that mirror
> dispatch, maps and trips. Problems another folder owns are listed under **Cross-references**.

## What Uber actually tests

Uber's loop is **2 coding rounds + design + hiring manager**, and the coding rounds are notably *messier*
than the FAANG average — deliberately.

- **Real-world framing.** Problems arrive as stories ("drivers", "trips", "surge zones") and you must translate to the graph/heap underneath. Practise the translation step.
- **Simulation & state machines.** Uber loves problems where you literally step a system forward: locks, calendars, itineraries, rate/route changes.
- **Graphs with weights and constraints.** BFS on states, Dijkstra with a twist, and topological/itinerary reconstruction show up constantly.
- **Follow-ups turn coding into design.** "Now 10k drivers per city" — expect the interviewer to push your data structure into a distributed setting.
- **They score debugging.** Uber interviewers commonly ask you to run your own code on a tricky input and fix it live.

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — Uber signature: simulation, routing & parsing

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Car Fleet | Medium | Sort by position + monotonic time stack | https://leetcode.com/problems/car-fleet/ | ⬜ |
| 2 | Shortest Bridge | Medium | DFS to mark island + BFS to expand | https://leetcode.com/problems/shortest-bridge/ | ⬜ |
| 3 | Open the Lock | Medium | BFS over string states with deadends | https://leetcode.com/problems/open-the-lock/ | ⬜ |
| 4 | Sliding Puzzle | Hard | BFS on serialised board states | https://leetcode.com/problems/sliding-puzzle/ | ⬜ |
| 5 | Evaluate Reverse Polish Notation | Medium | Stack evaluation | https://leetcode.com/problems/evaluate-reverse-polish-notation/ | ⬜ |
| 6 | Different Ways to Add Parentheses | Medium | Divide & conquer on operators + memo | https://leetcode.com/problems/different-ways-to-add-parentheses/ | ⬜ |
| 7 | Valid Parenthesis String | Medium | Greedy open-count range / two passes | https://leetcode.com/problems/valid-parenthesis-string/ | ⬜ |
| 8 | Longest Substring with At Least K Repeating Characters | Medium | Divide & conquer on rare characters | https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/ | ⬜ |
| 9 | Fraction to Recurring Decimal | Medium | Long division + remainder map | https://leetcode.com/problems/fraction-to-recurring-decimal/ | ⬜ |
| 10 | Random Point in Non-overlapping Rectangles | Medium | Weighted prefix sums + binary search | https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/ | ⬜ |
| 11 | Encode and Decode TinyURL | Medium | Bidirectional map / base-62 id | https://leetcode.com/problems/encode-and-decode-tinyurl/ | ⬜ |
| 12 | Design Underground System | Medium | Two maps: in-progress + route stats | https://leetcode.com/problems/design-underground-system/ | ⬜ |
| 13 | Island Perimeter | Easy | Grid counting with neighbour checks | https://leetcode.com/problems/island-perimeter/ | ⬜ |
| 14 | Path Sum III | Medium | Prefix-sum map along a root path | https://leetcode.com/problems/path-sum-iii/ | ⬜ |
| 15 | Count Complete Tree Nodes | Easy | Height comparison, `O(log²n)` | https://leetcode.com/problems/count-complete-tree-nodes/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Car Fleet** — Sort cars by starting position descending, compute `time = (target - pos) / speed`. A car joins the fleet ahead if its time is ≤ the current fleet's time; otherwise it starts a new fleet. Count the increases.
- **2. Shortest Bridge** — DFS/BFS to paint the first island, pushing all its cells into a queue, then BFS outward level by level until you touch the second island. Two-phase = the whole trick.
- **3. Open the Lock** — BFS from `"0000"`, 8 neighbours per state, `visited` seeded with the deadends. Bidirectional BFS is the optimisation to mention.
- **4. Sliding Puzzle** — Serialise the board to a string, precompute the legal swap indices for the blank in a 2×3 grid, BFS to `"123450"`. Same template as #3.
- **5. Evaluate RPN** — Stack; pop `b` then `a` (order matters for `-` and `/`), and truncate division **toward zero**, not floor.
- **6. Different Ways to Add Parentheses** — At every operator, recursively evaluate left and right, then combine all pairs. Memoise on the substring — Uber asks for the complexity improvement.
- **7. Valid Parenthesis String** — Track `[minOpen, maxOpen]`; `*` decrements min (clamped at 0) and increments max. Valid iff `maxOpen` never goes negative and `minOpen` ends at 0.
- **8. Longest Substring with At Least K Repeating Characters** — Any character appearing fewer than `k` times can never be inside the answer ⇒ split on it and recurse. Sliding window over "exactly t distinct" is the `O(26n)` alternative.
- **9. Fraction to Recurring Decimal** — Handle the sign and integer part, then long-divide: store `remainder → position in the output`; a repeat remainder marks where the parenthesis opens. Watch `INT_MIN / -1`.
- **10. Random Point in Non-overlapping Rectangles** — Weight each rectangle by its **point count** (`(x2-x1+1)*(y2-y1+1)`), prefix-sum, binary search a random roll, then pick uniformly inside that rectangle.
- **11. Encode and Decode TinyURL** — Counter → base-62 string, plus two maps. Discuss collisions, persistence, and why hashing the URL needs collision handling. It's a mini system-design question.
- **12. Design Underground System** — `checkInMap[id] = (station, time)` and `routeStats["A->B"] = [totalTime, count]`. `O(1)` everything; the follow-up is concurrency.
- **13. Island Perimeter** — `4 * landCells - 2 * adjacentPairs`. One pass counting right/down neighbours. Say the formula instead of DFS-ing — it's the signal.
- **14. Path Sum III** — Running prefix sum from the root with a `sum → count` map, adding on the way down and **removing on the way back up**. Naive double DFS is `O(n²)` and gets pushed on.
- **15. Count Complete Tree Nodes** — Compare left-spine and right-spine heights: equal ⇒ perfect subtree ⇒ `2^h - 1` with no recursion; otherwise recurse into both. `O(log²n)`.

---

## Tier 2 — lists, strings & counting

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Add Two Numbers II | Medium | Reverse or stack-based digit addition | https://leetcode.com/problems/add-two-numbers-ii/ | ⬜ |
| 17 | Odd Even Linked List | Medium | Two-chain splice | https://leetcode.com/problems/odd-even-linked-list/ | ⬜ |
| 18 | Remove Nth Node From End of List | Medium | Two pointers with a gap | https://leetcode.com/problems/remove-nth-node-from-end-of-list/ | ⬜ |
| 19 | Rotate List | Medium | Close the ring, cut at `n - k % n` | https://leetcode.com/problems/rotate-list/ | ⬜ |
| 20 | Partition List | Medium | Two dummy chains, then join | https://leetcode.com/problems/partition-list/ | ⬜ |
| 21 | Zigzag Conversion | Medium | Row simulation with a bouncing index | https://leetcode.com/problems/zigzag-conversion/ | ⬜ |
| 22 | Repeated DNA Sequences | Medium | Rolling hash / sliding 10-char window | https://leetcode.com/problems/repeated-dna-sequences/ | ⬜ |
| 23 | Wiggle Sort II | Medium | Median partition + reverse interleave | https://leetcode.com/problems/wiggle-sort-ii/ | ⬜ |
| 24 | Sort Characters By Frequency | Medium | Count + bucket sort | https://leetcode.com/problems/sort-characters-by-frequency/ | ⬜ |
| 25 | Subarray Sums Divisible by K | Medium | Prefix modulo counting | https://leetcode.com/problems/subarray-sums-divisible-by-k/ | ⬜ |
| 26 | Contiguous Array | Medium | Prefix sum with 0→-1 mapping | https://leetcode.com/problems/contiguous-array/ | ⬜ |
| 27 | Longest Well-Performing Interval | Medium | Prefix sum + first-occurrence map | https://leetcode.com/problems/longest-well-performing-interval/ | ⬜ |
| 28 | Minimum Domino Rotations For Equal Row | Medium | Try the two candidates from index 0 | https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/ | ⬜ |
| 29 | Reconstruct Itinerary | Hard | Hierholzer's Eulerian path | https://leetcode.com/problems/reconstruct-itinerary/ | ⬜ |
| 30 | Corporate Flight Bookings | Medium | Difference array | https://leetcode.com/problems/corporate-flight-bookings/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Add Two Numbers II** — "Can't reverse the list" ⇒ push both onto stacks and build the result by **prepending** nodes. Otherwise reverse, add, reverse back.
- **17. Odd Even Linked List** — Maintain `odd` and `even` tails plus `evenHead`; at the end `odd.next = evenHead`. Positions, not values — read the statement twice.
- **18. Remove Nth From End** — Advance `fast` by `n+1` from a dummy head, then move both; `slow` lands on the predecessor. The dummy is what makes "remove the head" free.
- **19. Rotate List** — Count the length, join tail→head into a ring, then walk `len - k % n` steps and cut. `k` can exceed the length.
- **20. Partition List** — Two dummies (`less`, `greater`), append each node to the right one, then splice and **null-terminate the greater chain** — forgetting that creates a cycle.
- **21. Zigzag Conversion** — Keep an array of row buffers and a direction that flips at row 0 and row `numRows-1`. Guard `numRows === 1`.
- **22. Repeated DNA Sequences** — Slide a 10-char window into a Set of seen substrings and a Set of results. The 2-bit-per-base rolling hash is the memory-optimised follow-up.
- **23. Wiggle Sort II** — Find the median (quickselect), then place elements at odd indices first, descending, wrapping into even indices — the "virtual index" mapping avoids equal-neighbour collisions.
- **24. Sort Characters By Frequency** — Count, then bucket by frequency (buckets 1..n) and read down. `O(n)` beats sorting; say both.
- **25. Subarray Sums Divisible by K** — Count prefix remainders in a `k`-sized array; each pair of equal remainders is a valid subarray. Normalise negatives with `((r % k) + k) % k`.
- **26. Contiguous Array** — Map `0 → -1`, then equal prefix sums bracket a balanced subarray; store the first index of each sum.
- **27. Longest Well-Performing Interval** — Map tiring→+1, non-tiring→-1. If the prefix is positive the whole span counts; otherwise look up the first index with prefix `score - 1`.
- **28. Minimum Domino Rotations** — Only `tops[0]` or `bottoms[0]` can be the uniform value. Test both, counting swaps in each direction; return -1 if neither works.
- **29. Reconstruct Itinerary** — Hierholzer: sort each destination list, DFS greedily consuming edges, and **append the airport to the result after its recursion finishes**, then reverse. Post-order is the entire trick.
- **30. Corporate Flight Bookings** — `diff[first] += seats; diff[last+1] -= seats`, then prefix-sum. Same tool as Car Pooling in the Netflix folder — recognise the family.

---

## Tier 3 — hards, DP & stateful design

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Longest Duplicate Substring | Hard | Binary search on length + Rabin-Karp | https://leetcode.com/problems/longest-duplicate-substring/ | ⬜ |
| 32 | Maximum Profit in Job Scheduling | Hard | Sort by end + DP with binary search | https://leetcode.com/problems/maximum-profit-in-job-scheduling/ | ⬜ |
| 33 | Minimum Cost to Make at Least One Valid Path in a Grid | Hard | 0-1 BFS (deque) | https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/ | ⬜ |
| 34 | Constrained Subsequence Sum | Hard | DP + monotonic deque window max | https://leetcode.com/problems/constrained-subsequence-sum/ | ⬜ |
| 35 | Knight Probability in Chessboard | Medium | DP over (moves, r, c) | https://leetcode.com/problems/knight-probability-in-chessboard/ | ⬜ |
| 36 | Word Search | Medium | Backtracking DFS on a grid | https://leetcode.com/problems/word-search/ | ⬜ |
| 37 | All O`one Data Structure | Hard | Doubly linked list of frequency buckets | https://leetcode.com/problems/all-oone-data-structure/ | ⬜ |
| 38 | Range Module | Hard | Sorted interval list / segment tree | https://leetcode.com/problems/range-module/ | ⬜ |
| 39 | My Calendar II | Medium | Overlap-of-overlaps tracking | https://leetcode.com/problems/my-calendar-ii/ | ⬜ |
| 40 | Split Array into Consecutive Subsequences | Medium | Greedy with need/freq maps | https://leetcode.com/problems/split-array-into-consecutive-subsequences/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Longest Duplicate Substring** — The answer is monotone: if a duplicate of length `L` exists, one of length `L-1` does too. Binary search `L`, and use a rolling hash (Rabin-Karp) with a big modulus to test each length in `O(n)`.
- **32. Maximum Profit in Job Scheduling** — Sort by end time; `dp[i] = max(dp[i-1], profit + dp[binarySearch(lastNonConflicting)])`. Weighted interval scheduling — name it.
- **33. Minimum Cost Valid Path in Grid** — Moving with the arrow costs 0, against it costs 1 ⇒ 0-1 BFS with a deque (push-front on cost 0, push-back on cost 1). Dijkstra also works but 0-1 BFS is the right answer.
- **34. Constrained Subsequence Sum** — `dp[i] = nums[i] + max(0, max of dp[i-k..i-1])`, with a monotonic deque supplying the window max in `O(1)` amortised.
- **35. Knight Probability in Chessboard** — `dp[m][r][c]` = probability of still being on the board after `m` moves; each move splits into 8 with weight 1/8. Roll the 2D layer to save memory.
- **36. Word Search** — DFS with in-place marking (`'#'`) and restore on backtrack. Prune by checking character counts first when the board is large.
- **37. All O`one Data Structure** — Buckets of keys keyed by count, linked in a doubly linked list in count order; a key moves to the adjacent bucket on inc/dec, so min/max are the list ends. `O(1)` everything.
- **38. Range Module** — Maintain disjoint sorted intervals; `addRange` merges everything overlapping, `removeRange` splits, `queryRange` binary searches for a covering interval. Handle touching endpoints deliberately.
- **39. My Calendar II** — Keep two lists: all bookings and all *overlaps*. A new booking is rejected if it intersects an existing overlap; otherwise record its intersections with existing bookings.
- **40. Split Array into Consecutive Subsequences** — Greedy with `freq` and `need` maps: extend an existing run if one needs this number, else start a run of 3, else return false.

---

## 🔗 Cross-references (Uber asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| LRU Cache, Number of Islands, Merge Intervals, Top K Frequent Elements, Word Ladder, Course Schedule II, Critical Connections in a Network | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| My Calendar I, Basic Calculator II, Decode String, Evaluate Division, Bus Routes, Text Justification | [`../Google/`](../Google/google_dsa_questions.md) |
| Exclusive Time of Functions, Clone Graph, Accounts Merge, Minimum Remove to Make Valid Parentheses | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Copy List with Random Pointer, Reverse Nodes in k-Group, LFU Cache, Design Browser History | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| Cheapest Flights Within K Stops, Path with Maximum Probability, Car Pooling | [`../Netflix/`](../Netflix/netflix_dsa_questions.md) |

## 📅 Suggested order (3 weeks)

1. **Week 1 — simulation & BFS states:** 5, 7, 13, 3, 4, 2, 36, 1, 21, 9
2. **Week 2 — lists & prefix counting:** 16, 17, 18, 19, 20, 22, 25, 26, 27, 30
3. **Week 3 — graphs, design & hards:** 29, 12, 11, 10, 37, 38, 39, 32, 33, 34, 31

> Uber-specific drill: for every problem, **restate it as a product story first** ("this is really 'which drivers can reach the rider in time'"). Uber interviewers give the problem as a story, and the candidates who fail usually fail at the translation step, not the algorithm.
