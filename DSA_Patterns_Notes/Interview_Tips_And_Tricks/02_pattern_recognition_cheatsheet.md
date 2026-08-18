# 🧠 Pattern Recognition Cheatsheet — Statement → Algorithm in 60 Seconds

> **Scope of this file:** the *mapping layer* — reading a problem and knowing which tool to reach for,
> plus the complexity budget that tells you what the intended solution must be.
> Round mechanics are in [`01_rounds_and_oa_strategy.md`](01_rounds_and_oa_strategy.md),
> what to say out loud is in [`03_communication_and_behavioral.md`](03_communication_and_behavioral.md),
> and the schedule is in [`04_study_plan_and_revision_system.md`](04_study_plan_and_revision_system.md).

---

## 1. Constraints → required complexity (read this first, always)

The input size tells you the intended solution before you've even finished the statement.

| Constraint on `n` | Complexity you must hit | What that usually means |
|-------------------|-------------------------|-------------------------|
| `n ≤ 10–12` | `O(n!)`, `O(2ⁿ · n)` | Permutations, full backtracking, TSP-style bitmask DP |
| `n ≤ 20–25` | `O(2ⁿ)` | Subset enumeration, bitmask DP, meet-in-the-middle |
| `n ≤ 100` | `O(n³)` | Floyd-Warshall, interval DP, triple loops |
| `n ≤ 1,000–5,000` | `O(n²)` | 2D DP, all-pairs comparisons, `O(n²)` LIS |
| `n ≤ 10⁵–10⁶` | `O(n log n)` or `O(n)` | Sort, heap, binary search on answer, sliding window, hashmap, prefix sums, single graph traversal |
| `n ≤ 10⁹` (value, not array) | `O(log n)` or `O(√n)` | Binary search on the answer, math/number theory, matrix exponentiation |
| Multiple queries `q ≤ 10⁵` | `O((n + q) log n)` | Precompute prefix sums / sparse table / segment tree / BIT |

**Use it as a sentence in the interview:** *"n is up to 10⁵, so I need at worst n log n — that rules out
checking every pair, which means a hashmap or sorting."* That single line demonstrates the whole
problem-solving axis in 8 seconds.

---

## 2. Keyword → pattern trigger table

| The statement says… | Reach for | Sanity check |
|---------------------|-----------|--------------|
| "contiguous subarray/substring" + "longest/shortest/at most K" | **Sliding window** | Fails with negative numbers if the condition isn't monotone |
| "contiguous subarray" + "sum equals K" (with negatives) | **Prefix sum + hashmap** | Seed the map with `{0: 1}` |
| "subarray divisible by K" | **Prefix sum modulo counting** | Normalise negative remainders |
| "sorted array" + "pair / triplet / closest" | **Two pointers** | Sort first if it isn't sorted and order doesn't matter |
| "in-place", "O(1) extra space", array of values in `[1..n]` | **Index-as-hash** (negate / swap into place) | Values must be bounded by `n` |
| "k-th largest / smallest", "top K", "median of a stream" | **Heap** (size-k, or two heaps) | Size-k heap = `O(n log k)`; QuickSelect = `O(n)` average |
| "next greater/smaller", "span", "histogram", "temperature" | **Monotonic stack** | Store indices, not values |
| "sliding window maximum/minimum" | **Monotonic deque** | Pop back while worse, pop front when out of window |
| "minimum steps / shortest transformation / fewest moves", unweighted | **BFS** | Mark visited *when enqueuing* |
| "shortest path" + weights | **Dijkstra**; negative weights → **Bellman-Ford** | With ≤ k stops → Bellman-Ford rounds |
| "edge weights are only 0 and 1" | **0-1 BFS with a deque** | Cheaper than Dijkstra |
| "prerequisites", "ordering", "dependencies", "build order" | **Topological sort (Kahn's)** | Cycle ⇒ impossible; count processed nodes |
| "connected components", "merge groups", "are X and Y related" | **Union-Find** | Path compression + union by rank |
| "grid" + "regions / islands / flood" | **DFS/BFS flood fill** | Border-seeded fill for "not touching the edge" variants |
| "all combinations / permutations / partitions" | **Backtracking** | Sort + skip duplicates at the same depth |
| "minimum/maximum" + overlapping subproblems | **DP** | Define the state in one English sentence first |
| "can we achieve X with limit L", answer is monotone | **Binary search on the answer** | Write the boolean `feasible(mid)` first |
| "prefix", "autocomplete", "dictionary of words" | **Trie** | Or sort + binary search for one-shot queries |
| "intervals" | **Sort by start** (merging) or **by end** (max non-overlapping / greedy) | Two different sorts, two different problems |
| "at most / at least K distinct" | **Sliding window + count map** | "Exactly K" = `atMost(K) - atMost(K-1)` |
| "cycle in a linked list / find duplicate in place" | **Floyd's tortoise & hare** | Also gives the entry point with the reset trick |
| "tree, path between nodes" | **DFS returning a value up + a global answer** | The return value ≠ the answer — that's the classic bug |
| "kth smallest in a BST", "validate BST" | **In-order traversal** | In-order of a BST is sorted; use that sentence |
| "count of smaller/greater to the right", "inversions" | **BIT / merge sort with counting** | Compress values first |
| "XOR", "single number", "bit tricks" | **XOR properties / bitmask** | `x ^ x = 0`, `n & (n-1)` clears the lowest bit |
| "simultaneous state: position **and** something else" | **BFS/DP over a composite state** (often a bitmask) | Keys, fuel, moves-remaining, direction |

---

## 3. The 14 patterns that cover ~90% of interview questions

Ordered by return on investment. Master them in this order.

1. **Hashmap counting / lookup** — Two Sum family, frequency problems, grouping.
2. **Two pointers** — sorted pairs, palindromes, in-place array compaction, merging from the back.
3. **Sliding window** — fixed size and variable size; "at most K" is the master template.
4. **Prefix sums** (1D, 2D, and difference arrays) — range sums, subarray counts, booking/interval increments.
5. **Binary search** — on a sorted array *and* on the answer. The second is the one that separates candidates.
6. **Sorting + greedy** — intervals, scheduling, exchange arguments ("swapping can't make it worse").
7. **Heap / priority queue** — top-K, k-way merges, scheduling by earliest end.
8. **Monotonic stack / deque** — next-greater, histograms, window extremes.
9. **Tree DFS** — return-a-value-upward with a global answer; and BFS level order for level questions.
10. **Graph traversal** — BFS for unweighted shortest path, DFS for reachability/cycles, plus topological sort.
11. **Union-Find** — connectivity, merging, "process edges in sorted order" tricks.
12. **Backtracking** — subsets, permutations, combinations, board placement; dedup by sorting + skipping.
13. **Dynamic programming** — 1D (house robber, LIS), 2D (grids, two strings), knapsack, interval DP.
14. **Tries and bitmasks** — prefix queries, XOR maximisation, small-set state compression.

Everything else (segment trees, Tarjan's bridges, Hierholzer's, Manacher's, matrix exponentiation) is a
*specialist* tool. Learn them only after all 14 above are automatic.

---

## 4. Template selection guide (which variant to write)

**Binary search — pick by question type:**
- *"Does the target exist?"* → `while (lo <= hi)`, return on match.
- *"First index ≥ target" (lower bound)* → `while (lo < hi) { mid; if (a[mid] < t) lo = mid + 1; else hi = mid; }` → `lo`.
- *"Minimum capacity/speed/days that works"* → binary search the **answer range**, with a `feasible(mid)` boolean; keep the first `true`.

**Sliding window — pick by question type:**
- *Fixed size k* → add the entering element, remove the leaving one, no inner loop.
- *Longest with a constraint* → expand right always, shrink left `while (invalid)`, record after shrinking.
- *Shortest with a constraint* → expand right, shrink `while (valid)`, record **inside** the shrink loop.
- *Exactly K distinct* → `atMost(K) - atMost(K-1)`.

**DP — write the state as an English sentence before any code:**
> "`dp[i][j]` is the minimum cost to cover the first `i` items using exactly `j` groups."

If you can't say that sentence, you don't have the recurrence yet, and coding will not produce it.
Then, in order: base cases → transition → iteration direction → space optimisation.

**Graph — decide in this order:** directed or undirected → weighted or not → do I need the path or only the cost → is the state just the node, or node + extra state?

---

## 5. Complexity quick reference

| Structure / operation | Time |
|---|---|
| Hashmap get/set (average) | `O(1)` |
| Heap push/pop | `O(log n)` |
| Sort | `O(n log n)` |
| Binary search | `O(log n)` |
| Union-Find (with compression + rank) | ~`O(α(n))` ≈ `O(1)` |
| BFS/DFS on a graph | `O(V + E)` |
| Dijkstra with a binary heap | `O((V + E) log V)` |
| Trie insert/search of a word of length L | `O(L)` |
| BIT / segment tree query & update | `O(log n)` |
| Building a heap from an array | `O(n)` |
| Backtracking over subsets / permutations | `O(2ⁿ)` / `O(n!)` |

**Space you must also say out loud:** recursion depth counts. A DFS on a 10⁵-node path graph is `O(n)` stack — mention converting it to an iterative version.

---

## 6. The 60-second triage script

Run this on every problem, in this exact order:

1. **What am I returning?** (a value, an index, a list, a boolean — say it)
2. **What's `n`?** → pick the complexity budget from §1.
3. **What structure is the input?** (sorted? grid? tree? graph? stream? intervals?)
4. **What's the brute force, and what work does it repeat?** The repeated work names the pattern.
5. **Which of the 14 patterns removes that repetition?** → check §2 for the keyword trigger.
6. **Can I state the state/invariant in one sentence?** If not, go back to step 4.

If steps 1–6 take longer than 5 minutes, code the brute force and optimise from working code — always, no exceptions.
