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
| 1 | Number of Islands | Number of Islands | Medium | Grid BFS/DFS | https://leetcode.com/problems/number-of-islands/ | ⬜ |
| 2 | Rotting Oranges | Zombie in Matrix | Medium | Multi-source BFS | https://leetcode.com/problems/rotting-oranges/ | ⬜ |
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

## If you only have time for a handful

Do these 8 first — they cover the widest spread of patterns with the highest reported frequency:
**#1 Number of Islands, #3 Pairs of Songs Divisible by 60, #4 Top K Frequent Elements,
#5 Merge Intervals, #7 LRU Cache, #9 Minimum Difficulty of a Job Schedule,
#12 Number of Provinces, #16 Longest Substring Without Repeating Characters.**
