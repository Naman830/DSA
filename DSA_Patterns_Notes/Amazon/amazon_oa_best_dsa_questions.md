# 🎯 Amazon SDE I Intern — OA DSA Question Bank

> Prep list for the **SDE I Intern, Amazon University Talent Acquisition** OA (Job ID `10488368`).
> The Coding Challenge section is **2 problems in 100 minutes**. Everything below is ranked so the
> questions most likely to actually appear are at the top — work top-down if your time is short.

## How this list is ranked

- **Tier 1 — Amazon's own repeat OA bank.** Amazon reuses a fixed pool of custom-worded problems
  across new-grad and intern OAs year after year (2020 → 2026 reports all show the same names).
  These have the single highest hit-rate — do these first.
- **Tier 2 — Broad-spread patterns.** Generic LeetCode-Amazon-tagged staples covering the pattern
  mix Amazon's own OA guide describes (Array/String/Sliding Window/HashMap for Q1, Graph/Tree/DP/Heap
  for Q2). Not Amazon-exclusive wording, but the exact skills tested.
- **Tier 3 — Freshest 2025/2026 reports.** Newer custom problems surfacing in the last few OA cycles.
  A couple don't have a public LeetCode twin yet, so the link is the closest official analog to drill
  the same technique.

Some Tier 1/3 problems are Amazon-proprietary and not hosted verbatim on LeetCode — for those the
**LeetCode Link** column points to the closest official equivalent so you can still practice the
exact pattern under a timer.

## Legend

- **Pattern** = what to recognize it as under time pressure
- ⬜ Not solved · ✅ Solved

---

## Tier 1 — Amazon's Repeat OA Bank (highest priority)

| # | Problem | Amazon OA Name | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|-----------------|------------|---------|----------------|--------|
| 1 | Number of Islands | Number of Islands | Medium | Grid BFS/DFS | https://leetcode.com/problems/number-of-islands/ | ✅ |
| 2 | Rotting Oranges | Zombie in Matrix | Medium | Multi-source BFS | https://leetcode.com/problems/rotting-oranges/ | ✅ |
| 3 | Pairs of Songs With Total Durations Divisible by 60 | Music Pairs | Medium | HashMap / remainder counting | https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/ | ⬜ |
| 4 | Top K Frequent Elements | Top K Frequently Mentioned Keywords | Medium | Heap / HashMap | https://leetcode.com/problems/top-k-frequent-elements/ | ⬜ |
| 5 | Merge Intervals | Merge Intervals | Medium | Sort + Greedy | https://leetcode.com/problems/merge-intervals/ | ⬜ |
| 6 | Plates Between Candles | Items in Containers | Medium | Prefix sums + boundaries | https://leetcode.com/problems/plates-between-candles/ | ⬜ |
| 7 | LRU Cache | Count LRU Cache Misses | Medium | Design: HashMap + Doubly LL | https://leetcode.com/problems/lru-cache/ | ⬜ |
| 8 | Maximum Units on a Truck | Fill the Truck | Easy | Greedy + sort | https://leetcode.com/problems/maximum-units-on-a-truck/ | ⬜ |
| 9 | Minimum Difficulty of a Job Schedule | Minimum Difficulty of a Job Schedule | Hard | DP (partition) | https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/ | ⬜ |
| 10 | Break a Palindrome | Break a Palindrome | Medium | Greedy on strings | https://leetcode.com/problems/break-a-palindrome/ | ⬜ |
| 11 | K Closest Points to Origin | Nearest City / K Nearest Post Offices | Medium | Heap | https://leetcode.com/problems/k-closest-points-to-origin/ | ⬜ |
| 12 | Number of Provinces | Friend Circles | Medium | DFS / Union-Find | https://leetcode.com/problems/number-of-provinces/ | ⬜ |
| 13 | Merge k Sorted Lists | Merge Two/K Sorted Lists | Hard | Linked List + Heap | https://leetcode.com/problems/merge-k-sorted-lists/ | ⬜ |
| 14 | Min Cost to Connect All Points | Min Cost to Connect All Nodes | Medium | MST (Prim's/Kruskal's) | https://leetcode.com/problems/min-cost-to-connect-all-points/ | ⬜ |
| 15 | Critical Connections in a Network | Critical Routers / Servers | Hard | Graph bridges (Tarjan's) | https://leetcode.com/problems/critical-connections-in-a-network/ | ⬜ |
| 16 | Longest Substring Without Repeating Characters | Longest Substring Without Repeating Characters | Medium | Sliding Window | https://leetcode.com/problems/longest-substring-without-repeating-characters/ | ⬜ |

---

## Tier 2 — Broad-Spread High-Frequency Patterns

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|----------------|--------|
| 17 | Two Sum | Easy | HashMap | https://leetcode.com/problems/two-sum/ | ⬜ |
| 18 | Trapping Rain Water | Hard | Two Pointer / Stack | https://leetcode.com/problems/trapping-rain-water/ | ⬜ |
| 19 | Course Schedule II | Medium | Topological Sort | https://leetcode.com/problems/course-schedule-ii/ | ⬜ |
| 20 | Kth Largest Element in an Array | Medium | Heap / QuickSelect | https://leetcode.com/problems/kth-largest-element-in-an-array/ | ⬜ |
| 21 | Word Break | Medium | DP | https://leetcode.com/problems/word-break/ | ⬜ |
| 22 | Coin Change | Medium | DP | https://leetcode.com/problems/coin-change/ | ⬜ |
| 23 | Sliding Window Maximum | Hard | Monotonic Deque | https://leetcode.com/problems/sliding-window-maximum/ | ⬜ |
| 24 | Network Delay Time | Medium | Dijkstra | https://leetcode.com/problems/network-delay-time/ | ⬜ |
| 25 | Product of Array Except Self | Medium | Prefix / Suffix Product | https://leetcode.com/problems/product-of-array-except-self/ | ⬜ |
| 26 | Top K Frequent Words (analog for *Favorite Genres*) | Medium | HashMap + Sort/Heap | https://leetcode.com/problems/top-k-frequent-words/ | ⬜ |

---

## Tier 3 — Freshest 2025/2026 Reported Questions

| # | Problem | Amazon OA Name | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|-----------------|------------|---------|----------------|--------|
| 27 | Capacity To Ship Packages Within D Days | Warehouse Shipment Allocation | Medium | Binary Search on Answer | https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/ | ⬜ |
| 28 | Subarray Sum Equals K (closest analog) | Balanced Segments | Medium | Prefix Sum + HashMap | https://leetcode.com/problems/subarray-sum-equals-k/ | ⬜ |
| 29 | Two Sum Less Than K (closest analog) | Optimal Utilization | Easy | Two Pointer / Sort | https://leetcode.com/problems/two-sum-less-than-k/ | ⬜ |
| 30 | Reorganize String (closest analog) | Five Star Sellers | Medium | Greedy + Heap | https://leetcode.com/problems/reorganize-string/ | ⬜ |

---

## Tier 4 — Amazon-specific extras (added to round this out to 40)

| # | Problem | Amazon OA Name | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|-----------------|------------|---------|----------------|--------|
| 31 | Search Suggestions System | Product Suggestions | Medium | Trie / sorted + binary search | https://leetcode.com/problems/search-suggestions-system/ | ⬜ |
| 32 | Analyze User Website Visit Pattern | Top 3-Sequence | Medium | HashMap + combination counting | https://leetcode.com/problems/analyze-user-website-visit-pattern/ | ⬜ |
| 33 | Concatenated Words | Substrings of Words | Hard | Trie / DP over the dictionary | https://leetcode.com/problems/concatenated-words/ | ⬜ |
| 34 | Maximum Area of Island | Largest Storage Region | Medium | Grid DFS returning area | https://leetcode.com/problems/max-area-of-island/ | ⬜ |
| 35 | Word Ladder | Shortest Transformation | Hard | BFS over word states | https://leetcode.com/problems/word-ladder/ | ⬜ |
| 36 | Partition Labels | Split Shipment Labels | Medium | Greedy last-occurrence sweep | https://leetcode.com/problems/partition-labels/ | ⬜ |
| 37 | Most Common Word | Review Keyword Filter | Easy | Tokenise + count + banlist | https://leetcode.com/problems/most-common-word/ | ⬜ |
| 38 | Prison Cells After N Days | Cell State Simulation | Medium | Cycle detection in state space | https://leetcode.com/problems/prison-cells-after-n-days/ | ⬜ |
| 39 | Cut Off Trees for Golf Event | Treasure Island / Forest Cut | Hard | Sorted targets + repeated BFS | https://leetcode.com/problems/cut-off-trees-for-golf-event/ | ⬜ |
| 40 | Robot Bounded In Circle | Robot Rover Bounded | Medium | Simulation + vector invariant | https://leetcode.com/problems/robot-bounded-in-circle/ | ⬜ |

---

## 🔑 Crack notes

Short "how to recognise and attack it" notes. Read the note *after* you've attempted the problem once.

### Tier 1

- **1. Number of Islands** — DFS/BFS sinking each island as you visit it (`grid[r][c] = '0'`). Union-Find is the follow-up when they say "the grid streams in".
- **2. Rotting Oranges** — Multi-source BFS: enqueue **all** rotten cells first, count levels. Return -1 if any fresh orange survives.
- **3. Pairs of Songs Divisible by 60** — Count remainders; pair `r` with `60 - r`, and handle `r === 0` and `r === 30` with `c*(c-1)/2`.
- **4. Top K Frequent Elements** — Count map, then bucket sort by frequency for `O(n)`, or a size-k min-heap for `O(n log k)`. Give the bucket answer when they ask to beat `n log k`.
- **5. Merge Intervals** — Sort by start, extend the last interval while `start <= lastEnd`, else push. The whole family (Insert Interval, Non-overlapping) is the same three lines.
- **6. Plates Between Candles** — Prefix count of plates + nearest-candle-left/right arrays, so each query is `O(1)`. Precompute, never scan per query.
- **7. LRU Cache** — HashMap + doubly linked list; move-to-front on get/put, evict from the tail. Practise writing the DLL helpers (`remove`, `insertFront`) cleanly — that's the timed part.
- **8. Maximum Units on a Truck** — Sort boxes by units per box descending and fill greedily. Two lines, but say the exchange argument.
- **9. Minimum Difficulty of a Job Schedule** — `dp[d][i]` = min difficulty scheduling jobs from `i` in `d` days; inner loop tracks the running max of the current day's chunk. Impossible when `jobs < d`.
- **10. Break a Palindrome** — Replace the first non-`a` in the **first half** with `a`; if none, change the last character to `b`. Length 1 ⇒ `""`.
- **11. K Closest Points to Origin** — Max-heap of size k, or QuickSelect for `O(n)` average. No need for the square root.
- **12. Number of Provinces** — Union-Find over the adjacency matrix (or DFS). Count roots at the end.
- **13. Merge k Sorted Lists** — Min-heap of the k heads (`O(N log k)`), or pairwise merge (divide and conquer). Both are accepted; know why they're the same complexity.
- **14. Min Cost to Connect All Points** — Prim's on a dense graph with Manhattan distances is `O(n²)` and simplest here. Say "this is an MST" in the first sentence.
- **15. Critical Connections in a Network** — Tarjan's bridges: `disc[]` and `low[]`; an edge is a bridge when `low[child] > disc[node]`. Skip only the immediate parent edge.
- **16. Longest Substring Without Repeating Characters** — Sliding window with `lastIndex` map; jump `left` to `max(left, lastIndex[c] + 1)`. The jump (not a while-loop) is the clean version.

### Tier 2

- **17. Two Sum** — HashMap of value→index in one pass. Say the sorted-two-pointer alternative and when it's better (sorted input, no index needed).
- **18. Trapping Rain Water** — Two pointers moving inward from the shorter side, tracking `leftMax`/`rightMax`. The monotonic stack version is the "another way?" answer.
- **19. Course Schedule II** — Kahn's algorithm; the order you pop nodes *is* the answer. Empty result if a cycle remains.
- **20. Kth Largest Element in an Array** — QuickSelect averages `O(n)`; heap is `O(n log k)` and safer under interview pressure. State the worst case of QuickSelect.
- **21. Word Break** — `dp[i] = any(dp[j] && dict.has(s[j..i]))`. Put the dictionary in a Set and cap the inner loop by the longest word.
- **22. Coin Change** — Unbounded knapsack minimising count: `dp[a] = min(dp[a - coin] + 1)`. Initialise with `Infinity`, not 0.
- **23. Sliding Window Maximum** — Monotonic decreasing deque of **indices**; pop from the back while smaller, pop the front when it leaves the window.
- **24. Network Delay Time** — Dijkstra with a min-heap; the answer is the max finalised distance, or -1 if any node is unreachable.
- **25. Product of Array Except Self** — Prefix pass into the result, then a suffix running product multiplied in. No division — that's the constraint being tested.
- **26. Top K Frequent Words** — Count, then a min-heap with a comparator that breaks ties **lexicographically the other way**. That comparator is the whole difficulty.

### Tier 3

- **27. Capacity To Ship Packages Within D Days** — Binary search capacity in `[max(weights), sum(weights)]`; feasibility = greedy day counting. Same template as Split Array Largest Sum.
- **28. Subarray Sum Equals K** — Prefix sum + `sum → count` map, seeded with `{0: 1}`. Sliding window does **not** work with negative numbers — say that.
- **29. Two Sum Less Than K** — Sort + two pointers, tracking the best sum strictly below `k`. Return -1 when nothing qualifies.
- **30. Reorganize String** — Max-heap by remaining count, always take the two most frequent that differ from the last placed char. Impossible when `maxCount > (n+1)/2`.

### Tier 4

- **31. Search Suggestions System** — Sort the products and binary search the prefix range, keeping the first 3 — simpler and faster to write than a Trie under a timer. Mention the Trie version for repeated queries.
- **32. Analyze User Website Visit Pattern** — Group visits by user (sorted by timestamp), enumerate every 3-sequence per user as a Set, count across users, tie-break lexicographically.
- **33. Concatenated Words** — Sort by length; a word is concatenated if `wordBreak` succeeds using only shorter words already added to the Set. Reuses the Word Break DP directly.
- **34. Maximum Area of Island** — Same sinking DFS as Number of Islands but return the area from the recursion and take the max.
- **35. Word Ladder** — BFS over words, generating neighbours by trying 26 letters at each position; **remove words from the set as you enqueue** them. Bidirectional BFS is the optimisation.
- **36. Partition Labels** — Record each character's last index, sweep keeping the running max end; when `i === end`, cut. Greedy, `O(n)`.
- **37. Most Common Word** — Lowercase, split on non-letters, filter the banned set, count, take the max. The grade is careful tokenising, not the algorithm.
- **38. Prison Cells After N Days** — The state space is at most 256, so record seen states and take `N % cycleLength`. Simulating a billion days is the trap.
- **39. Cut Off Trees for Golf Event** — Sort tree heights ascending and BFS from each tree to the next; sum the steps, return -1 if any leg is unreachable.
- **40. Robot Bounded In Circle** — Simulate one instruction cycle; the robot is bounded iff it returns to the origin **or** its facing direction changed. One pass, no loop over 4 cycles needed.

---

## 🔗 Cross-references (Amazon asks these too — solved in another folder)

Every question in `DSA_Patterns_Notes` lives in exactly one company folder. Amazon interviewers also ask
these, but they're owned elsewhere so nothing is duplicated:

| Problem | Owned by |
|---------|----------|
| Text Justification, Word Search II, Minimum Window Substring, Find Median from Data Stream, Insert Interval, Median of Two Sorted Arrays, Longest Consecutive Sequence | [`../Google/`](../Google/google_dsa_questions.md) |
| LCA of a Binary Tree, Serialize and Deserialize Binary Tree, Clone Graph, Accounts Merge, Group Anagrams, Task Scheduler, Course Schedule | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Reverse Linked List, Copy List with Random Pointer, Rotate Image, Spiral Matrix, Implement Trie, LFU Cache, Maximum Subarray | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| 3Sum, First Missing Positive, Rotate Array, Design HashMap, Reorder List | [`../Apple/`](../Apple/apple_dsa_questions.md) |
| Kth Largest Element in a Stream, Koko Eating Bananas, Cheapest Flights Within K Stops, Non-overlapping Intervals | [`../Netflix/`](../Netflix/netflix_dsa_questions.md) |
| Word Search, Reconstruct Itinerary, Design Underground System, Path Sum III | [`../Uber/`](../Uber/uber_dsa_questions.md) |
| Longest Palindromic Substring, Combination Sum, Next Permutation, Minimum Path Sum | [`../Adobe/`](../Adobe/adobe_dsa_questions.md) |
| Meeting-rooms style grouping (Divide Intervals Into Minimum Number of Groups), Single-Threaded CPU, All Nodes Distance K | [`../Atlassian/`](../Atlassian/atlassian_dsa_questions.md) |
| Valid Palindrome, Delete Node in a BST, Coin Change II, Integer to English Words | [`../Salesforce/`](../Salesforce/salesforce_dsa_questions.md) |

---

## If you only have time for a handful

Do these 8 first — they cover the widest spread of patterns with the highest reported frequency:
**#1 Number of Islands, #3 Pairs of Songs Divisible by 60, #4 Top K Frequent Elements,
#5 Merge Intervals, #7 LRU Cache, #9 Minimum Difficulty of a Job Schedule,
#12 Number of Provinces, #16 Longest Substring Without Repeating Characters.**
